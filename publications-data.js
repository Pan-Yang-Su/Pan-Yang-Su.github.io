/* =========================================================
   PUBLICATIONS DATA
   Edit this array to add, remove, or update your papers.
   Each entry needs:
     title    – paper title (string)
     authors  – "Last, F., Last, F., & Last, F." (string)
     venue    – journal / conference name (string)
     year     – 4-digit number, used for the "By Year" view
     topics   – array of topic strings, used for the "By Topic" view.
                A paper can belong to more than one topic.
     link     – URL to the paper (DOI, journal page, or PDF). Use "" if none yet.
   The page automatically regroups these into both views — you only
   maintain ONE list.
   ========================================================= */

const PUBLICATIONS = [
  {
    title: "Short-term range forecasting for alpine plant communities under rapid warming",
    authors: "Researcher, J., Okafor, T., & Lindqvist, S.",
    venue: "Journal of Ecology",
    year: 2026,
    topics: ["Species distribution modeling", "Climate change"],
    link: "https://doi.org/10.0000/example1"
  },
  {
    title: "Open-source Bayesian workflows for field ecologists: the distmodel R package",
    authors: "Researcher, J., & Patel, R.",
    venue: "Methods in Ecology and Evolution",
    year: 2025,
    topics: ["Open science", "Software & tools"],
    link: "https://doi.org/10.0000/example2"
  },
  {
    title: "Boreal range contraction under two warming scenarios: a 20-year monitoring synthesis",
    authors: "Researcher, J., Chen, M., Okafor, T., & Lindqvist, S.",
    venue: "Global Change Biology",
    year: 2025,
    topics: ["Species distribution modeling", "Climate change", "Long-term monitoring"],
    link: "https://doi.org/10.0000/example3"
  },
  {
    title: "Machine learning versus process-based models for near-term ecological forecasting: a comparison",
    authors: "Researcher, J., & Nakamura, H.",
    venue: "Ecography",
    year: 2024,
    topics: ["Species distribution modeling", "Machine learning"],
    link: "https://doi.org/10.0000/example4"
  },
  {
    title: "Reproducibility in spatial ecology: a survey of code and data sharing practices",
    authors: "Researcher, J., Patel, R., & Chen, M.",
    venue: "PLOS ONE",
    year: 2023,
    topics: ["Open science"],
    link: "https://doi.org/10.0000/example5"
  },
  {
    title: "Hierarchical models for sparse citizen-science occurrence data",
    authors: "Researcher, J.",
    venue: "Proceedings of the International Statistical Ecology Conference",
    year: 2022,
    topics: ["Species distribution modeling", "Citizen science", "Long-term monitoring"],
    link: "https://doi.org/10.0000/example6"
  }
];
