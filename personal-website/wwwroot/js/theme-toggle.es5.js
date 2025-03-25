﻿"use strict";

document.addEventListener("DOMContentLoaded", function () {
    var root = document.documentElement;
    var toggle = document.getElementById("themeToggle");

    if (!toggle) return;

    // Get saved theme or system preference
    var theme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    setTheme(theme);

    toggle.addEventListener("click", function () {
        theme = theme === "dark" ? "light" : "dark";
        setTheme(theme);
    });

    function setTheme(theme) {
        root.setAttribute("data-theme", theme);
        toggle.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }
});
console.log("Theme toggle script loaded");

