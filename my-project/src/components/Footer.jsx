import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>chiniii social hayguud</p>

      <div style={styles.icons}>
        <a
          href="https://www.instagram.com/e.erdenetugs"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
        >
          <FaInstagram size={28} />
        </a>

        <a
          href="https://www.facebook.com/batuka.batka.10"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
        >
          <FaFacebook size={28} />
        </a>

        <a
          href="https://www.youtube.com/watch?v=jEqbB9o4zYo&list=PLnB80L7lHSR3P2Ofv-DXvcD1B7Oi1DxXD"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
        >
          <FaYoutube size={28} />
        </a>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "50px",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f4f4f4",
  },
  icons: {
    marginTop: "10px",
    display: "flex",
    gap: "20px",
    justifyContent: "center",
  },
  iconLink: {
    color: "#333",
  },
};

export default Footer;

