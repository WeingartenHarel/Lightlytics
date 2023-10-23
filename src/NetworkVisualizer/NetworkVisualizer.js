import { useContext } from "react";
import { context } from "./GraphProvider";
import Node from "./Node";
import Edges from "./Edges";
import ArrowComponent from "./ArrowComponent";

import "./NetworkVisualizer.css";

function NetworkVisualizer() {
  const { width, height, edges, nodesByParent } = useContext(context);
  const rootNodes = nodesByParent[null];
  // to do - move data to nodes.json
  const arrowsData = [
    {
      x1: 60,
      y1: 260,
      x2: 150,
      y2: 260
    },
    {
      x1: 220,
      y1: 250,
      x2: 270,
      y2: 250
    },
    {
      x1: 340,
      y1: 265,
      x2: 380,
      y2: 265
    },
    {
      x1: 270,
      y1: 280,
      x2: 220,
      y2: 280
    }
  ];

  return (
    <div className="container">
      {rootNodes?.map((node, index) => (
        <>
          {console.log("node", index, node)}
          <Node key={node.id} node={node} />
        </>
      ))}
      <ArrowComponent arrowsData={arrowsData} />
      <Edges edges={edges} width={width} height={height} />
    </div>
  );
}

export default NetworkVisualizer;
