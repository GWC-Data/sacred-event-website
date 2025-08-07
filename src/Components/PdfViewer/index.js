import PropTypes from "prop-types";
import React, { useEffect, useState, useRef } from "react";
import { GlobalWorkerOptions, getDocument } from "pdfjs-dist/legacy/build/pdf";
import "./pdfViewer.css";

GlobalWorkerOptions.workerSrc = "/pdf.worker.mjs";

const PdfViewer = ({ src, width = "100%", height = "100%" }) => {
  const [pdf, setPdf] = useState(null);
  const [numPages, setNumPages] = useState(0);
  const [zoom, setZoom] = useState(1.0);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const loadPdf = async () => {
      try {
        setLoading(true);
        const loadedPdf = await getDocument(src).promise;
        setPdf(loadedPdf);
        setNumPages(loadedPdf.numPages);
      } catch (error) {
        console.error("Error loading PDF:", error);
      }
    };

    if (src) loadPdf();
  }, [src]);

  useEffect(() => {
    if (!pdf) return;

    const renderPages = async () => {
      if (!containerRef.current) return;
      containerRef.current.innerHTML = "";
      setLoading(true);

      for (let i = 1; i <= numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: zoom });

        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({ canvasContext: context, viewport }).promise;

        const pageWrapper = document.createElement("div");
        pageWrapper.style.marginBottom = "5px";
        pageWrapper.appendChild(canvas);

        containerRef.current.appendChild(pageWrapper);
      }

      setLoading(false);
    };

    renderPages();
  }, [pdf, numPages, zoom]);

  return (
    <>
      <div className="zoom-item">
        <button
          className="zoom-link c-pointer"
          onClick={() => setZoom((prev) => Math.min(prev + 0.2, 3))}
        >
          <i className="fas fa-search-plus" />
        </button>
        <button
          className="zoom-link c-pointer"
          onClick={() => setZoom((prev) => Math.max(prev - 0.2, 0.5))}
        >
          <i className="fas fa-search-minus" />
        </button>
      </div>
      <hr className="my-2" />
      {loading && <>Loading </>}
      <div className="pdf-container" style={{ width, height }}>
        <div ref={containerRef} className="pdf-canvas-container" />
      </div>
    </>
  );
};

PdfViewer.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default PdfViewer;
