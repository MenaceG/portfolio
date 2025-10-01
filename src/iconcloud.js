import { useEffect, useMemo, useState } from "react";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";

// Cloud container props
const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "270px",
      paddingTop: 10,
      paddingRight: 10,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.06,
    minSpeed: 0.04,
  },
};

// Render a single icon
const renderCustomIcon = (icon) => {
  const bgHex = "#f3f2ef"; // background color
  const fallbackHex = "#6e6e73"; // fallback color
  const minContrastRatio = 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      onClick: (e) => e.preventDefault(),
    },
  });
};

export default function IconCloud({ iconSlugs }) {
  const [data, setData] = useState(null);

  // Fetch icons when slugs change
  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;
    return Object.values(data.simpleIcons).map(renderCustomIcon);
  }, [data]);

  if (!renderedIcons) return <div className="text-gray-500">Loading icons...</div>;

  return <Cloud {...cloudProps}>{renderedIcons}</Cloud>;
}
