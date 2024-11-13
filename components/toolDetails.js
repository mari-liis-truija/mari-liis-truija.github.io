import ToolsImg01 from "@/public/images/tools/html-5.png";
import ToolsImg02 from "@/public/images/tools/css.png";
import ToolsImg03 from "@/public/images/tools/js.png";
import ToolsImg04 from "@/public/images/tools/php.png";
import ToolsImg05 from "@/public/images/tools/node-js.png";
import ToolsImg06 from "@/public/images/tools/bootstrap.png";
import ToolsImg07 from "@/public/images/tools/jquery.png";
import ToolsImg08 from "@/public/images/tools/wordpress.png";
import ToolsImg09 from "@/public/images/tools/adobe-illustrator.png";
import ToolsImg10 from "@/public/images/tools/adobe-photoshop.png";
import ToolsImg11 from "@/public/images/tools/laravel.png";
import ToolsImg12 from "@/public/images/tools/react.png";
// import ToolsImg13 from "@/public/images/tools/vite.png";
import ToolsImg14 from "@/public/images/tools/adobe-xd.png";
import ToolsImg15 from "@/public/images/tools/tailwind-css.png";
import ToolsImg16 from "@/public/images/tools/vue.png";
import ToolsImg17 from "@/public/images/tools/quasar.png";
import ToolsImg18 from "@/public/images/tools/xampp.png";
import ToolsImg19 from "@/public/images/tools/wamp.png";
import ToolsImg20 from "@/public/images/tools/hasura.png";
import ToolsImg21 from "@/public/images/tools/GraphQL.png";
import ToolsImg22 from "@/public/images/tools/postman.png";
import ToolsImg23 from "@/public/images/tools/Material UI.png";
import ToolsImg24 from "@/public/images/tools/Git.png";
import ToolsImg25 from "@/public/images/tools/FileZilla.png";
import ToolsImg26 from "@/public/images/tools/figma.png";
import ToolsImg27 from "@/public/images/tools/TypeScript.png";
import ToolsImg28 from "@/public/images/tools/PhpStorm.png";
import ToolsImg29 from "@/public/images/tools/vscode.png";

const toolDetails = [
  {
    toolsImg: ToolsImg01,
    name: "HTML5",
    head: "Markup language for structuring web content",
    content:
      "Skilled in writing semantic, accessible, and responsive HTML to provide a clean structure and a solid foundation for web applications.",
    categories: [1, 2],
  },
  {
    toolsImg: ToolsImg02,
    name: "CSS3",
    head: "Stylesheet language for web page styling",
    content:
      "Proficient in advanced CSS techniques, including Flexbox, Grid, animations, and responsive design, for crafting engaging and adaptive interfaces.",
    categories: [1, 2],
  },
  {
    toolsImg: ToolsImg03,
    name: "JavaScript",
    head: "Versatile programming language for the web",
    content:
      "Familiar with core JavaScript and DOM manipulation, laying a strong foundation for dynamic and interactive front-end development.",
    categories: [1, 2],
  },
  {
    toolsImg: ToolsImg04,
    name: "PHP",
    head: "Server-side scripting language",
    content:
      "Basic knowledge of PHP for WordPress customizations and backend integration, enhancing functionality and user experience.",
    categories: [1, 3],
  },
  {
    toolsImg: ToolsImg05,
    name: "Node.js",
    head: "JavaScript runtime for backend development",
    content:
      "Introductory knowledge of Node.js, facilitating server-side application development and seamless front-end integration.",
    categories: [1, 3],
  },
  {
    toolsImg: ToolsImg06,
    name: "Bootstrap",
    head: "CSS framework for responsive design",
    content:
      "Adept at using Bootstrap for rapid, mobile-first layouts that deliver consistency across devices.",
    categories: [1, 2],
  },
  {
    toolsImg: ToolsImg07,
    name: "jQuery",
    head: "JavaScript library for DOM manipulation and AJAX",
    content:
      "Comfortable with jQuery for efficient DOM handling, event management, and AJAX, streamlining front-end tasks.",
    categories: [1, 2],
  },
  {
    toolsImg: ToolsImg08,
    name: "WordPress",
    head: "Content Management System (CMS)",
    content:
      "Experienced in WordPress theme and plugin customization to create flexible, user-centered websites.",
    categories: [1, 2],
  },
  {
    toolsImg: ToolsImg09,
    name: "Adobe Illustrator",
    head: "Vector graphics editor for professional design",
    content:
      "Proficient in Illustrator, crafting vector graphics, icons, and assets that adhere to brand and project specifications.",
    categories: [1, 4],
  },
  {
    toolsImg: ToolsImg10,
    name: "Adobe Photoshop",
    head: "Industry-standard tool for raster graphics",
    content:
      "Experienced in Photoshop for photo editing, asset creation, and design optimization, enhancing web visuals.",
    categories: [1, 4],
  },
  {
    toolsImg: ToolsImg11,
    name: "Laravel",
    head: "Elegant PHP framework for web applications",
    content:
      "Used Laravel extensively in projects like Netsport, leveraging Laravel Mix for faster deployment and a smooth workflow.",
    categories: [1, 3],
  },
  {
    toolsImg: ToolsImg12,
    name: "React",
    head: "JavaScript library for building user interfaces",
    content:
      "Started with React in autumn 2023 by creating a school project landing page. Since then, I've utilized it in various projects, including Alexela's web charging platform and this portfolio, deepening my appreciation for its logical and modular design.",
    categories: [1, 2],
  },
  // {
  //   toolsImg: ToolsImg13,
  //   name: "Vite",
  //   head: "Fast frontend build tool",
  //   content:
  //     "Used Vite in one project for its development speed and simplicity. Keen to explore it further in future projects.",
  //   categories: [1, 5],
  // },
  {
    toolsImg: ToolsImg14,
    name: "Adobe XD",
    head: "Design tool for UI/UX and prototyping",
    content:
      "A go-to for prototyping web and mobile apps, creating numerous Cloudics-based designs and user flows.",
    categories: [1, 4],
  },
  {
    toolsImg: ToolsImg15,
    name: "Tailwind CSS",
    head: "Utility-first CSS framework",
    content:
      "My preferred CSS framework, which I adopt whenever possible. Its utility-based approach simplifies styling and keeps code manageable.",
    categories: [1, 2],
  },
  {
    toolsImg: ToolsImg16,
    name: "Vue",
    head: "Frontend JavaScript framework for building user interfaces and single-page applications",
    content:
      "Gained solid foundational knowledge using Vue in a project, making me open to incorporating it into future builds.",
    categories: [1, 2],
  },
  {
    toolsImg: ToolsImg17,
    name: "Quasar",
    head: "Framework based on Vue.js for cross-platform apps",
    content:
      "Initially challenging, but I grew comfortable using it with Vue.js. Looking forward to future opportunities to apply it.",
    categories: [1, 2],
  },
  {
    toolsImg: ToolsImg18,
    name: "XAMPP",
    head: "Cross-platform web server solution",
    content:
      "Reliable tool for local development since 2019/2020, used to streamline testing and development.",
    categories: [1, 5],
  },
  {
    toolsImg: ToolsImg19,
    name: "WampServer",
    head: "Windows platform for dynamic web applications",
    content:
      "Used in specific projects for local development, offering a straightforward setup for web application testing.",
    categories: [1, 5],
  },
  {
    toolsImg: ToolsImg20,
    name: "Hasura",
    head: "API platform for data-driven applications",
    content:
      "Worked with Hasura and GraphQL in a Vue.js project, valuing its intuitive interface and data organization.",
    categories: [1, 3],
  },
  {
    toolsImg: ToolsImg21,
    name: "GraphQL",
    head: "Flexible query language for APIs",
    content:
      "Used with Hasura in a Vue project, enabling streamlined data requests. Ideal for efficient, single-call data fetching.",
    categories: [1, 3],
  },
  {
    toolsImg: ToolsImg22,
    name: "Postman",
    head: "Platform for API development",
    content:
      "Competent in using Postman for API requests, testing, and management, facilitating API integration.",
    categories: [1, 3],
  },
  {
    toolsImg: ToolsImg23,
    name: "Material UI",
    head: "React component library for Material Design",
    content:
      "Utilized in my portfolio project; it's an intuitive library that speeds up development while maintaining visual consistency.",
    categories: [1, 2],
  },
  {
    toolsImg: ToolsImg24,
    name: "Git",
    head: "Version control system",
    content:
      "Comfortable managing branches, commits, and merges. Always open to deepening my Git knowledge as projects evolve.",
    categories: [1, 5],
  },
  {
    toolsImg: ToolsImg25,
    name: "FileZilla",
    head: "Reliable FTP client for efficient file management",
    content:
      "I've used FileZilla extensively for managing WordPress and academic projects. Its intuitive interface and reliability make it my go-to tool for seamless file transfers and remote updates.",
    categories: [1, 5],
  },
  {
    toolsImg: ToolsImg26,
    name: "Figma",
    head: "Collaborative design tool for teams",
    content:
      "Used primarily in school projects, finding it well-suited for collaborative design workflows. Looking forward to using Figma more.",
    categories: [1, 4],
  },
  {
    toolsImg: ToolsImg27,
    name: "TypeScript",
    head: "Open-source language to build large-scale web apps",
    content:
      "Using TypeScript with React has elevated my coding process, adding type safety and clarity to my projects. I enjoy how TypeScript allows me to write more maintainable code.",
    categories: [1, 2],
  },
  {
    toolsImg: ToolsImg28,
    name: "PHPStorm",
    head: "PHP IDE by JetBrains",
    content:
      "Used extensively at Astro Baltics, highly customized to fit my workflow, making development faster and more intuitive.",
    categories: [1, 6],
  },
  {
    toolsImg: ToolsImg29,
    name: "VS Code",
    head: "Code editor for modern web applications",
    content:
      "My primary editor for academic and personal projects. Enjoying its flexibility and the various extensions that streamline my workflow.",
    categories: [1, 6],
  },
];

export default toolDetails;
