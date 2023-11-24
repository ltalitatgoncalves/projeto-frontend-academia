import React from "react";

function Footer() {
  return (
    <div className="footer" style={{ height: "100vh", textAlign: "center" }}>
      <div className="p-4">
        <section>
          <div className="d-flex justify-content-center">
            <div className="ratio ratio-16x9">
              <iframe
                className="shadow-1-strong rounded"
                src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
                title="YouTube video"
                allowFullScreen
                data-gtm-yt-inspected-2340190_699="true"
                id="388567449"
                width="800" // Defina a largura desejada
                height="450" // Defina a altura desejada
              ></iframe>
            </div>
          </div>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </div>
  );
}

export default Footer;
