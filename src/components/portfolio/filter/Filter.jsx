import React, { useState } from "react";
import "./filter.scss";
const filtersData = [
    {
        name: "All",
        id: "all",
    },
    {
        name: "Products",
        id: "product",
    },
    {
        name: "Web Pages",
        id: "web-page",
    },
    {
        name: "Web Apps",
        id: "web-app",
    },
    {
        name: "Mobile Apps",
        id: "mobile-app",
    },
];
const Filter = ({ filterProjects }) => {
    const [activeTab, SetTab] = useState("all");
    const clickHandle = function (tab) {
        SetTab(tab);
        filterProjects(tab);
        console.log(tab);
    };

    return (
        <div className="tab-container">
            {filtersData.map((data) => (
                <div
                    key={data.id}
                    className={`filter-item ${
                        activeTab === data.id ? "active" : ""
                    }`}
                    onClick={() => clickHandle(data.id)}
                >
                    {data.name}
                </div>
            ))}
        </div>
    );
};

export default Filter;
