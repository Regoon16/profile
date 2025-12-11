import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>Миний сошиал хаяг🧑‍💻</p>

      <div style={styles.icons}>
        <a
          href="https://instagram.com/_g_e_v_a_a_"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
        >
          <FaInstagram size={28} />
        </a>

        <a
          href="https://facebook.com/gevaa.gevaa.7"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
        >
          <FaFacebook size={28} />
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
