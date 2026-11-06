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
  siteUrl: string;
  navItems: NavItem[];
}

export const siteConfig: SiteConfig = {
  name: "DHPMCC",
  shortName: "DHPMCC",
  fullName: "Daniel H. Plotnick Memorial Computing Competition",
  tagline: "A programming competition hosted at Bergen County Academies.",
  description: "The Daniel H. Plotnick Memorial Computing Competition (DHPMCC) is an in-person competitive programming tournament hosted at Bergen County Academies in Hackensack, New Jersey.",
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
  siteUrl: "https://dhpmcc.org",
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
    question: "Who can participate?",
    answer: "DHPMCC is open to all pre-college students interested in algorithmic problem solving and competitive programming. Students compete in divisions based on grade level.",
  },
  {
    question: "Do I need competitive programming experience?",
    answer: "No. Previous competitive programming experience is not required. The contest is designed to be approachable for students who are newer to programming while still providing challenging problems for experienced competitors.",
  },
  {
    question: "What programming languages are supported?",
    answer: "The contest platform supports C, C++17, Java, and Python 3.12. Solutions run in sandboxed environments with enforced CPU time and memory limits.",
  },
  {
    question: "What should I bring?",
    answer: "Competitors should bring their own laptop, charger, and any accessories they need for programming. Your laptop should have a working Wi-Fi connection and a code editor or IDE configured for your chosen language.",
  },
  {
    question: "Will programming software be provided?",
    answer: "Competitors are responsible for having their programming environment ready before the contest. Make sure your compiler or interpreter and preferred editor/IDE are installed and working before arriving.",
  },
  {
    question: "Where is DHPMCC held?",
    answer: "DHPMCC is held in person at Bergen County Academies, located at 200 Hackensack Avenue, Hackensack, NJ 07601. Specific room assignments and check-in instructions will be provided to registered participants before the contest.",
  },
  {
    question: "How is the contest scored?",
    answer: "Problems have different point values based on their difficulty and available subtasks. Points are awarded according to how many official test cases and subtasks a submission successfully passes, subject to the problem’s time and memory limits.",
  },
  {
    question: "Can I submit multiple times?",
    answer: "Yes. Competitors may submit solutions throughout the contest, subject to any submission limits specified for individual problems.",
  },
  {
    question: "What happens if I have a technical problem?",
    answer: "Notify a contest organizer or proctor as soon as possible. Contest staff will help determine whether the issue can be resolved. Competitors should not attempt to modify or interfere with the contest platform themselves.",
  },
  {
    question: "Will there be sample problems or test cases?",
    answer: "Problem statements will include whatever sample inputs and outputs are necessary to explain the problem format. Competitors should also expect hidden tests that are not provided during the contest.",
  },
  {
    question: "Can I work with other competitors?",
    answer: "No. DHPMCC is an individual competition. Competitors must develop and submit their own solutions and may not collaborate or receive unauthorized assistance during the contest.",
  },
  {
    question: "When will I receive more information?",
    answer: "Registered competitors will receive additional information about check-in, room assignments, contest timing, equipment requirements, and other logistics before the competition.",
  },
];

export interface Sponsor {
  name: string;
  url?: string;
  logo?: string;
}

export interface SponsorsConfig {
  main: Sponsor[];
  inKind: Sponsor[];
}

export const non_trivial: Sponsor = {
  name: "Non-Trivial",
  url: "https://www.non-trivial.org/",
  logo: "/images/sponsors/non_trivial.png",
};

export const art_of_problem_solving: Sponsor = {
  name: "Art of Problem Solving (AoPS)",
  url: "https://www.artofproblemsolving.com/",
  logo: "/images/sponsors/art_of_problem_solving.png",
};

export const bca: Sponsor = {
  name: "Bergen County Academies",
  url: "https://www.bergen.org/",
  logo: "/images/sponsors/bca.png",
};

export const sponsors: SponsorsConfig = {
  main: [bca],
  inKind: [non_trivial, art_of_problem_solving],
};
