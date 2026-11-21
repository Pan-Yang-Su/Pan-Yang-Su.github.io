/* =========================================================
   PUBLICATIONS DATA
   Edit this file to add, remove, or update papers. The Publications
   page builds both views (By Year and By Topic) from it.

   MY_NAME – how your name appears in author lists; it is shown in bold.

   TOPICS  – the categories shown in the By Topic view, in display order.
     name  – full category name (papers refer to this exact string)
     short – shorter label shown on each paper's tag
     focus – one-line description shown when the category is opened

   PUBLICATIONS – one entry per paper:
     title, authors, venue, year
     topics    – list of category names from TOPICS (a paper can be in several)
     link      – URL of the published version ("" if not published yet)
     arxivLink – URL of the arXiv version ("" if none)
     equalContribution – (optional) authors marked * as co-first authors,
                 written exactly as in the authors string
   ========================================================= */

const MY_NAME = "Su, P.-Y.";

const TOPICS = [
  {
    name: "Game Theory & Equilibrium Analysis",
    short: "Game theory",
    focus: "Strategic interactions, equilibria, congestion games, and efficiency analysis."
  },
  {
    name: "Mechanism Design & Incentives",
    short: "Mechanism design",
    focus: "Incentive compatibility, auctions, pricing, contract design, and strategic resource allocation."
  },
  {
    name: "Transportation & Mobility",
    short: "Transportation",
    focus: "Traffic routing, EV charging, advanced air mobility, and transportation networks."
  },
  {
    name: "Control & Multi-Agent Systems",
    short: "Control & multi-agent",
    focus: "Dynamical systems, control, decentralized coordination, and learning dynamics."
  },
  {
    name: "Wireless Networks & Resource Allocation",
    short: "Wireless networks",
    focus: "Wireless communication systems, auctions, and resource allocation."
  }
];

const PUBLICATIONS = [
  {
    title: "Dynamic Auction Mechanisms in a Closed-Credit Economy: Sequential Slot Reallocation in Air Traffic Management",
    authors: "Kim, J., Su, P.-Y., Mendoza, M. G., Tuck, V., Maheshwari, C., & Sastry, S.",
    venue: "arXiv preprint",
    year: 2026,
    topics: ["Mechanism Design & Incentives", "Transportation & Mobility"],
    link: "",
    arxivLink: "https://arxiv.org/abs/2610.22683"
  },
  {
    title: "Congestion Games with Heterogeneous Valuations: An Optimal Transport Approach",
    authors: "Su, P.-Y., Mehr, N., & Sastry, S.",
    venue: "arXiv preprint",
    year: 2026,
    topics: ["Game Theory & Equilibrium Analysis", "Mechanism Design & Incentives", "Transportation & Mobility"],
    link: "",
    arxivLink: "https://arxiv.org/abs/2607.03625"
  },
  {
    title: "Average Unfairness in Routing Games",
    authors: "Su, P.-Y., Alanqary, A., Ferguson, B. L., Wu, M., Bayen, A. M., & Sastry, S.",
    venue: "International Conference on Autonomous Agents and Multiagent Systems (AAMAS)",
    year: 2026,
    topics: ["Game Theory & Equilibrium Analysis", "Transportation & Mobility"],
    link: "https://dl.acm.org/doi/10.65109/HAKF7947",
    arxivLink: "https://arxiv.org/abs/2601.16187",
    equalContribution: ["Su, P.-Y.", "Alanqary, A."]
  },
  {
    title: "Moral Hazard in LTI Dynamics: A Hypothesis Testing Approach",
    authors: "Jeong, J., Su, P.-Y., Sastry, S., & Aswani, A.",
    venue: "IEEE Conference on Decision and Control (CDC)",
    year: 2026,
    topics: ["Mechanism Design & Incentives", "Control & Multi-Agent Systems"],
    link: "",
    arxivLink: "https://arxiv.org/abs/2605.00158"
  },
  {
    title: "Dynamic Multi-Robot Task Allocation under Uncertainty and Communication Constraints: A Game-Theoretic Approach",
    authors: "Mendoza, M. G., Su, P.-Y., Ferguson, B. L., & Sastry, S.",
    venue: "IEEE Conference on Decision and Control (CDC)",
    year: 2026,
    topics: ["Game Theory & Equilibrium Analysis", "Control & Multi-Agent Systems"],
    link: "",
    arxivLink: "https://arxiv.org/abs/2604.11954"
  },
  {
    title: "Two-Stage Mechanism Design for Electric Vehicle Charging with Day-Ahead Reservations",
    authors: "Su, P.-Y., Ju, Y., Moura, S. J., & Sastry, S.",
    venue: "IEEE Conference on Decision and Control (CDC)",
    year: 2025,
    topics: ["Mechanism Design & Incentives", "Transportation & Mobility"],
    link: "https://doi.org/10.1109/CDC57313.2025.11312856",
    arxivLink: "https://arxiv.org/abs/2509.00270"
  },
  {
    title: "Privacy-Preserving Mechanisms for Coordinating Airspace Usage in Advanced Air Mobility",
    authors: "Maheshwari, C., Mendoza, M. G., Tuck, V., Su, P.-Y., Qin, V. L., Seshia, S. A., Balakrishnan, H., & Sastry, S.",
    venue: "ACM Journal on Autonomous Transportation Systems",
    year: 2025,
    topics: ["Mechanism Design & Incentives", "Transportation & Mobility"],
    link: "https://dl.acm.org/doi/10.1145/3732290",
    arxivLink: "https://arxiv.org/abs/2411.03582"
  },
  {
    title: "Incentive-Compatible Vertiport Reservation in Advanced Air Mobility: An Auction-Based Approach",
    authors: "Su, P.-Y., Maheshwari, C., Tuck, V., & Sastry, S.",
    venue: "IEEE Conference on Decision and Control (CDC)",
    year: 2024,
    topics: ["Mechanism Design & Incentives", "Transportation & Mobility"],
    link: "https://doi.org/10.1109/CDC56724.2024.10886225",
    arxivLink: "https://arxiv.org/abs/2403.18166",
    equalContribution: ["Su, P.-Y.", "Maheshwari, C."]
  },
  {
    title: "Priority-Aware Resource Allocation for 5G mmWave Multicast Broadcast Services",
    authors: "Su, P.-Y., Lin, K.-H., Li, Y.-Y., & Wei, H.-Y.",
    venue: "IEEE Transactions on Broadcasting, 69(1), 246–263",
    year: 2023,
    topics: ["Mechanism Design & Incentives", "Wireless Networks & Resource Allocation"],
    link: "https://doi.org/10.1109/TBC.2022.3221696",
    arxivLink: ""
  },
  {
    title: "Dynamic Tolling in Arc-based Traffic Assignment Models",
    authors: "Chiu, C.-Y., Maheshwari, C., Su, P.-Y., & Sastry, S.",
    venue: "Allerton Conference on Communication, Control, and Computing",
    year: 2023,
    topics: ["Game Theory & Equilibrium Analysis", "Transportation & Mobility", "Control & Multi-Agent Systems"],
    link: "https://doi.org/10.1109/Allerton58177.2023.10313516",
    arxivLink: "https://arxiv.org/abs/2307.05466"
  },
  {
    title: "Arc-Based Traffic Assignment: Equilibrium Characterization and Learning",
    authors: "Chiu, C.-Y., Maheshwari, C., Su, P.-Y., & Sastry, S.",
    venue: "IEEE Conference on Decision and Control (CDC)",
    year: 2023,
    topics: ["Game Theory & Equilibrium Analysis", "Transportation & Mobility", "Control & Multi-Agent Systems"],
    link: "https://doi.org/10.1109/CDC49753.2023.10384151",
    arxivLink: "https://arxiv.org/abs/2304.04705"
  },
  {
    title: "Valuation-Aware Federated Learning: An Auction-Based Approach for User Selection",
    authors: "Su, P.-Y., Tsai, P.-H., Lin, Y.-K., & Wei, H.-Y.",
    venue: "IEEE Vehicular Technology Conference (VTC Fall)",
    year: 2022,
    topics: ["Mechanism Design & Incentives", "Wireless Networks & Resource Allocation"],
    link: "https://doi.org/10.1109/VTC2022-Fall57202.2022.10012978",
    arxivLink: "",
    equalContribution: ["Su, P.-Y.", "Tsai, P.-H.", "Lin, Y.-K."]
  },
  {
    title: "Resource Allocation Mechanism for Cooperative Multicast in Integrated Satellite-Terrestrial Network",
    authors: "Wu, J.-S., Su, P.-Y., Lin, K.-H., & Wei, H.-Y.",
    venue: "IEEE Vehicular Technology Conference (VTC Fall)",
    year: 2022,
    topics: ["Mechanism Design & Incentives", "Wireless Networks & Resource Allocation"],
    link: "https://doi.org/10.1109/VTC2022-Fall57202.2022.10012837",
    arxivLink: "",
    equalContribution: ["Wu, J.-S.", "Su, P.-Y."]
  },
  {
    title: "Strategy-Proof Beam-Aware Multicast Resource Allocation Mechanism",
    authors: "Su, P.-Y., Li, Y.-Y., & Wei, H.-Y.",
    venue: "Wireless and Optical Communications Conference (WOCC)",
    year: 2021,
    topics: ["Mechanism Design & Incentives", "Wireless Networks & Resource Allocation"],
    link: "https://doi.org/10.1109/WOCC53213.2021.9602884",
    arxivLink: ""
  }
];
