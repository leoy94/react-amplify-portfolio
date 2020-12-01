/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function FooterDefault() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  href="https://www.creative-tim.com?ref=nuk-pro-react-footer-default"
                  target="_blank"
                >
                  Home
                </a>
              </li>
              {/* <li>
                <a
                  href="http://presentation.creative-tim.com?ref=nuk-pro-react-footer-default"
                  target="_blank"
                >
                  About Me
                </a>
              </li> */}
              {/* <li>
                <a
                  href="http://blog.creative-tim.com?ref=nuk-pro-react-footer-default"
                  target="_blank"
                >
                  Resume
                </a>
              </li> */}
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Designed and developed by{" "}
            <a
              href=""
              target="_blank"
            >
              Layth Yousif
            </a>
            {/* . Coded by{" "}
            <a
              href="https://www.creative-tim.com?ref=nuk-pro-react-footer-default"
              target="_blank"
            >
              Layth Yousif
            </a> */}
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default FooterDefault;
