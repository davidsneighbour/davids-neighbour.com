import Alpine from "alpinejs";
import LiteYTEmbed from "lite-youtube-embed";

// eslint-disable-next-line no-undef
window.Alpine = Alpine;

Alpine.start();

// Register custom element
customElements.define("lite-youtube", LiteYTEmbed);
