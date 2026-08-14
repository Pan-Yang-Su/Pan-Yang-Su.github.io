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

   Sourced from your DBLP profile (https://dblp.org/pid/307/5831.html)
   on 2026-08-14. A few duplicate arXiv preprints of papers that also
   appeared at a conference/journal were merged into a single entry —
   double check everything against your CV and adjust as needed.
   ========================================================= */

const PUBLICATIONS = [
  {
    title: "Average Unfairness in Routing Games",
    authors: "Su, P.-Y., Alanqary, A., Ferguson, B. L., Wu, M., Bayen, A. M., & Sastry, S.",
    venue: "arXiv preprint",
    year: 2026,
    topics: ["Game theory", "Traffic & transportation"],
    link: "https://doi.org/10.48550/arXiv.2601.16187"
  },
  {
    title: "Dynamic Multi-Robot Task Allocation under Uncertainty and Communication Constraints: A Game-Theoretic Approach",
    authors: "Mendoza, M. G., Su, P.-Y., Ferguson, B. L., & Sastry, S.",
    venue: "arXiv preprint",
    year: 2026,
    topics: ["Game theory", "Multi-agent systems"],
    link: "https://doi.org/10.48550/arXiv.2604.11954"
  },
  {
    title: "Moral Hazard in LTI Dynamics: A Hypothesis Testing Approach",
    authors: "Jeong, J., Su, P.-Y., Sastry, S., & Aswani, A.",
    venue: "arXiv preprint",
    year: 2026,
    topics: ["Game theory", "Control theory"],
    link: "https://doi.org/10.48550/arXiv.2605.00158"
  },
  {
    title: "Congestion Games with Heterogeneous Valuations: An Optimal Transport Approach",
    authors: "Su, P.-Y., Mehr, N., & Sastry, S.",
    venue: "arXiv preprint",
    year: 2026,
    topics: ["Game theory", "Mechanism design"],
    link: "https://doi.org/10.48550/arXiv.2607.03625"
  },
  {
    title: "Two-Stage Mechanism Design for Electric Vehicle Charging with Day-Ahead Reservations",
    authors: "Su, P.-Y., Ju, Y., Moura, S. J., & Sastry, S.",
    venue: "IEEE Conference on Decision and Control (CDC)",
    year: 2025,
    topics: ["Mechanism design", "Energy systems"],
    link: "https://doi.org/10.1109/CDC57313.2025.11312856"
  },
  {
    title: "Incentive-Compatible Vertiport Reservation in Advanced Air Mobility: An Auction-Based Approach",
    authors: "Su, P.-Y., Maheshwari, C., Tuck, V., & Sastry, S.",
    venue: "IEEE Conference on Decision and Control (CDC)",
    year: 2024,
    topics: ["Mechanism design", "Advanced air mobility"],
    link: "https://doi.org/10.1109/CDC56724.2024.10886225"
  },
  {
    title: "Privacy Preserving Mechanisms for Coordinating Airspace Usage in Advanced Air Mobility",
    authors: "Maheshwari, C., Mendoza, M. G., Tuck, V., Su, P.-Y., Qin, V. L., Seshia, S. A., Balakrishnan, H., & Sastry, S.",
    venue: "arXiv preprint",
    year: 2024,
    topics: ["Mechanism design", "Advanced air mobility"],
    link: "https://doi.org/10.48550/arXiv.2411.03582"
  },
  {
    title: "Priority-Aware Resource Allocation for 5G mmWave Multicast Broadcast Services",
    authors: "Su, P.-Y., Lin, K.-H., Li, Y.-Y., & Wei, H.-Y.",
    venue: "IEEE Transactions on Broadcasting, 69(1), 246–263",
    year: 2023,
    topics: ["Wireless networks"],
    link: "https://doi.org/10.1109/TBC.2022.3221696"
  },
  {
    title: "Dynamic Tolling in Arc-based Traffic Assignment Models",
    authors: "Chiu, C.-Y., Maheshwari, C., Su, P.-Y., & Sastry, S.",
    venue: "Allerton Conference on Communication, Control, and Computing",
    year: 2023,
    topics: ["Game theory", "Traffic & transportation"],
    link: "https://doi.org/10.1109/Allerton58177.2023.10313516"
  },
  {
    title: "Arc-Based Traffic Assignment: Equilibrium Characterization and Learning",
    authors: "Chiu, C.-Y., Maheshwari, C., Su, P.-Y., & Sastry, S.",
    venue: "IEEE Conference on Decision and Control (CDC)",
    year: 2023,
    topics: ["Game theory", "Traffic & transportation"],
    link: "https://doi.org/10.1109/CDC49753.2023.10384151"
  },
  {
    title: "Valuation-Aware Federated Learning: An Auction-Based Approach for User Selection",
    authors: "Su, P.-Y., Tsai, P.-H., Lin, Y.-K., & Wei, H.-Y.",
    venue: "IEEE Vehicular Technology Conference (VTC Fall)",
    year: 2022,
    topics: ["Federated learning", "Mechanism design"],
    link: "https://doi.org/10.1109/VTC2022-Fall57202.2022.10012978"
  },
  {
    title: "Resource Allocation Mechanism for Cooperative Multicast in Integrated Satellite-Terrestrial Network",
    authors: "Wu, J.-S., Su, P.-Y., Lin, K.-H., & Wei, H.-Y.",
    venue: "IEEE Vehicular Technology Conference (VTC Fall)",
    year: 2022,
    topics: ["Wireless networks"],
    link: "https://doi.org/10.1109/VTC2022-Fall57202.2022.10012837"
  },
  {
    title: "Strategy-Proof Beam-Aware Multicast Resource Allocation Mechanism",
    authors: "Su, P.-Y., Li, Y.-Y., & Wei, H.-Y.",
    venue: "Wireless and Optical Communications Conference (WOCC)",
    year: 2021,
    topics: ["Wireless networks", "Mechanism design"],
    link: "https://doi.org/10.1109/WOCC53213.2021.9602884"
  }
];
