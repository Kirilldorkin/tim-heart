console.clear();
const resolution = 24;
const gradientPaths = Array.from(
  document.querySelectorAll(".gradient-path"),

  function (path) {
    const length = path.getTotalLength();

    const segmentLength = length / resolution;
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    path.parentNode.insertBefore(g, path.nextSibling);

    g.style.strokeDasharray = segmentLength + " " + (length - segmentLength);

    for (var i = 0; i < resolution; i++) {
      const c = path.cloneNode();

      c.style.stroke = "hsl(" + (i / resolution) * 360 + ", 75%, 60%)";

      const offset = length * (i / resolution);
      c.style.strokeDashoffset = offset;

      c.style.setProperty("--total-offset", length + offset);

      g.appendChild(c);
    }

    return path;
  }
);
