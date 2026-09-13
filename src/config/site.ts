export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  fullName: string;
  tagline: string;
  description: string;
  year: string;
  date: string;
  location: string;
  venueDetail: string;
  format: string;
  competitionType: string;
  status: string;
  registrationUrl: string;
  contactEmail: string;
  rulesUrl: string;
  navItems: NavItem[];
}

export const siteConfig: SiteConfig = {
  name: "DHPMCC",
  shortName: "DHPMCC",
  fullName: "Daniel H. Plotnick Memorial Computing Competition",
  tagline: "A programming competition hosted at Bergen County Academies.",
  description: "The Daniel H. Plotnick Memorial Computing Competition (DHPMCC) is an in-person, individual algorithmic programming competition hosted at Bergen County Academies.",
  year: "2027",
  date: "February 20, 2027",
  location: "Bergen County Academies",
  venueDetail: "Hackensack, New Jersey",
  format: "In-person",
  competitionType: "Individual algorithmic contest",
  status: "UPCOMING",
  registrationUrl: "[REGISTRATION_URL]",
  contactEmail: "[CONTACT_EMAIL]",
  rulesUrl: "/rules",
  navItems: [
    { label: "Home", href: "/" },
    { label: "Rules", href: "/rules" },
    { label: "FAQ", href: "/faq" },
  ],
};

export const supportedLanguages = [
  {
    name: "C",
    standard: "C17 / C11",
    compiler: "GCC",
    flags: "-O2 -std=c17",
    notes: "Direct standard I/O via scanf/printf or fast I/O routines.",
  },
  {
    name: "C++",
    standard: "C++17",
    compiler: "G++",
    flags: "-O2 -std=c++17",
    notes: "Recommended for performance. Standard std::cin / std::cout with untied streams.",
  },
  {
    name: "Java",
    standard: "Java 17 / 21",
    compiler: "OpenJDK javac",
    flags: "Standard runtime limits apply",
    notes: "Main class execution. Fast input scanners recommended for large input volumes.",
  },
  {
    name: "Python",
    standard: "Python 3.12",
    compiler: "CPython 3.12",
    flags: "Standard interpreter",
    notes: "Standard sys.stdin.readline recommended for high-volume input parsing.",
  },
];

export const rulesSummary = [
  {
    topic: "Individual Competition",
    summary: "DHPMCC is an individual competition. All work submitted must be conceived and written entirely by the competitor during the contest window without unauthorized collaboration or external assistance.",
  },
  {
    topic: "Contest Timing & Window",
    summary: "The competition runs within a strictly monitored, synchronized time window. A live contest clock is displayed on the platform, and no late submissions will be accepted after the contest termination signal.",
  },
  {
    topic: "Supported Languages & Tools",
    summary: "Participants may submit solutions in C, C++17, Java, or Python 3.12. Solutions must rely exclusively on standard library packages; third-party packages and external network requests are strictly blocked.",
  },
  {
    topic: "Standard Input & Output",
    summary: "All problems read input from standard input (stdin) and write output to standard output (stdout). Solutions writing debug output or reading from disk files will be judged incorrect.",
  },
  {
    topic: "Submission Limits & Verdicts",
    summary: "Submissions are evaluated against comprehensive test suites. Potential verdicts include Accepted (AC), Wrong Answer (WA), Time Limit Exceeded (TLE), Memory Limit Exceeded (MLE), and Runtime Error (RTE).",
  },
  {
    topic: "Contest Integrity & Conduct",
    summary: "Competitors are expected to uphold strict academic integrity in accordance with Bergen County Academies policies. Any attempt to tamper with the judging infrastructure or observe other competitors' screens results in immediate disqualification.",
  },
];

export const faqs = [
  {
    question: "Who can compete?",
    answer: "DHPMCC is open to pre-college students interested in algorithmic problem solving and competitive programming.",
  },
  {
    question: "What programming languages are supported?",
    answer: "The contest platform supports C, C++17, Java, and Python 3.12. All compilers run in sandboxed execution containers with strict CPU time and memory limits.",
  },
  {
    question: "Do I need to bring a laptop?",
    answer: "Yes. Competitors must bring their own laptop with a working Wi-Fi card, an installed code editor/IDE, and the compilers or interpreters needed for their chosen programming languages.",
  },
  {
    question: "Where is DHPMCC held?",
    answer: "DHPMCC takes place in person at Bergen County Academies, located at 200 Hackensack Avenue, Hackensack, NJ 07601. Room assignments and check-in logistics will be sent to registered participants.",
  },
  {
    question: "How does scoring work?",
    answer: "Problems carry point values based on difficulty and test subtasks. Scoring is determined by correctness across test cases under standard time and memory limits.",
  },
];

export interface Sponsor {
  name: string;
  url?: string;
  logo?: string;
}

export interface SponsorsConfig {
  platinum: Sponsor[];
  gold: Sponsor[];
  silver: Sponsor[];
}

export const sponsors: SponsorsConfig = {
  platinum: [],
  gold: [],
  silver: [],
};
