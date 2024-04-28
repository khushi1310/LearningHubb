import React from "react";
import "./sidebar.css";

export default () => {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData("application/reactflow", nodeType);
        event.dataTransfer.effectAllowed = "move";
    };

    return (
        <aside className="sidebar">
            <div className="description">
                <p>
                    Start by dragging and dropping a node into the screen. You
                    can connect the nodes by connecting the handle on the bottom
                    of the node to the handle on top of next node
                </p>
            </div>

            <div
                className="glow-on-hover"
                onDragStart={(event) => onDragStart(event, "default")}
                draggable
            >
                <p>Drag Me</p>
            </div>
        </aside>
    );
};
