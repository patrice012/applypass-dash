"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SearchInputWithLabel } from "@/components/onboarding/search";
import { CheckboxFormMultiple } from "@/components/onboarding/checkboxesList";
import { useEffect, useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { useStepSlider } from "@/components/hooks/useStepSlider";
import { useToast } from "@/components/hooks/use-toast";
import { useRouter } from "next/navigation";
import { SelectItemsList } from "@/components/onboarding/selectItemsList";
import { Info, X } from "lucide-react";

// Define the items as a readonly array to ensure immutability.
const skills = [
  { id: "adobe-xd", label: "Adobe XD" },
  { id: "agile-development", label: "Agile Development" },
  { id: "alamofire", label: "Alamofire" },
  { id: "amazon-aurora", label: "Amazon Aurora" },
  { id: "amazon-aws", label: "Amazon AWS" },
  { id: "amazon-sagemaker", label: "Amazon SageMaker" },
  { id: "android-sdk", label: "Android SDK" },
  { id: "android-studio", label: "Android Studio" },
  { id: "angular", label: "Angular" },
  { id: "angularjs", label: "AngularJS" },
  { id: "ansible", label: "Ansible" },
  { id: "apache", label: "Apache" },
  { id: "apache-airflow", label: "Apache Airflow" },
  { id: "apache-hadoop", label: "Apache Hadoop" },
  { id: "apache-kafka", label: "Apache Kafka" },
  { id: "apache-spark", label: "Apache Spark" },
  { id: "appium", label: "Appium" },
  { id: "arduino", label: "Arduino" },
  { id: "argocd", label: "ArgoCD" },
  { id: "arm-mbed", label: "ARM Mbed" },
  { id: "assembly", label: "Assembly" },
  { id: "async", label: "Async" },
  { id: "avfoundation", label: "AVFoundation" },
  { id: "aws", label: "AWS" },
  { id: "axios", label: "Axios" },
  { id: "azure", label: "Azure" },
  { id: "babel", label: "Babel" },
  { id: "bash", label: "Bash" },
  { id: "behave", label: "Behave" },
  { id: "bcrypt", label: "bcrypt" },
  { id: "beautiful-soup", label: "Beautiful Soup" },
  { id: "bigquery", label: "BigQuery" },
  { id: "bluebird", label: "Bluebird" },
  { id: "bootstrap", label: "Bootstrap" },
  { id: "c", label: "C" },
  { id: "c-sharp", label: "C#" },
  { id: "c-plus-plus", label: "C++" },
  { id: "capistrano", label: "Capistrano" },
  { id: "celery", label: "Celery" },
  { id: "chai", label: "Chai" },
  { id: "charts", label: "Charts" },
  { id: "chef", label: "Chef" },
  { id: "circleci", label: "CircleCI" },
  { id: "clojure", label: "Clojure" },
  { id: "cmake", label: "CMake" },
  { id: "confluence", label: "Confluence" },
  { id: "core-animation", label: "Core Animation" },
  { id: "core-data", label: "Core Data" },
  { id: "core-location", label: "Core Location" },
  { id: "core-ml", label: "Core ML" },
  { id: "css", label: "CSS" },
  { id: "cypress", label: "Cypress" },
  { id: "d3-js", label: "D3.js" },
  { id: "dart", label: "Dart" },
  { id: "dash", label: "Dash" },
  { id: "django", label: "Django" },
  { id: "django-rest-framework", label: "Django Rest Framework" },
  { id: "docker", label: "Docker" },
  { id: "docker-compose", label: "Docker Compose" },
  { id: "elasticsearch", label: "ElasticSearch" },
  { id: "elixir", label: "Elixir" },
  { id: "elm", label: "Elm" },
  { id: "embedded-linux", label: "Embedded Linux" },
  { id: "ember-js", label: "Ember.js" },
  { id: "enzyme", label: "Enzyme" },
  { id: "express", label: "Express" },
  { id: "fastapi", label: "FastAPI" },
  { id: "figma", label: "Figma" },
  { id: "firebase", label: "Firebase" },
  { id: "flask", label: "Flask" },
  { id: "flutter", label: "Flutter" },
  { id: "fortran", label: "Fortran" },
  { id: "foundation", label: "Foundation" },
  { id: "freertos", label: "FreeRTOS" },
  { id: "gatling", label: "Gatling" },
  { id: "git", label: "Git" },
  { id: "github-actions", label: "GitHub Actions" },
  { id: "gitlab", label: "Gitlab" },
  {
    id: "gitlab-ci",
    label: "Gitlab CI",
  },
  {
    id: "ember-js",
    label: "Ember.js",
  },
  {
    id: "enzyme",
    label: "Enzyme",
  },
  {
    id: "express",
    label: "Express",
  },
  {
    id: "fast-api",
    label: "FastAPI",
  },
  {
    id: "figma",
    label: "Figma",
  },
  {
    id: "firebase",
    label: "Firebase",
  },
  {
    id: "flask",
    label: "Flask",
  },
  {
    id: "free-rtos",
    label: "FreeRTOS",
  },
  {
    id: "fortran",
    label: "Fortran",
  },
  {
    id: "gitlabci",
    label: "Gitlab CI",
  },
  {
    id: "github-actions",
    label: "GitHub Actions",
  },
  {
    id: "gitlabci",
    label: "Gitlablab",
  },
  {
    id: "git",
    label: "Git",
  },
  {
    id: "gatling",
    label: "Gatling",
  },
  {
    id: "go",
    label: "Go",
  },
  {
    id: "google-cloud-platform",
    label: "Google Cloud Platform",
  },
  {
    id: "google-what-if",
    label: "Google What-If",
  },
  {
    id: "gpu-parallel-computing",
    label: "GPU Parallel Computing",
  },
  {
    id: "grafana",
    label: "Grafana",
  },
  {
    id: "graphql",
    label: "GraphQL",
  },
  {
    id: "hasura",
    label: "Hasura",
  },
  {
    id: "helm",
    label: "Helm",
  },
  {
    id: "heroku",
    label: "Heroku",
  },
  {
    id: "hugging-face",
    label: "Hugging Face",
  },
  {
    id: "iar-embedded-workbench",
    label: "IAR Embedded Workbench",
  },
  {
    id: "instruments",
    label: "Instruments",
  },
  {
    id: "image-j",
    label: "ImageJ",
  },
  {
    id: "influxdb",
    label: "InfluxDB",
  },
  {
    id: "ionic",
    label: "Ionic",
  },
  {
    id: "ionic-appflow",
    label: "Ionic Appflow",
  },
  {
    id: "java",
    label: "Java",
  },
  {
    id: "javascript",
    label: "JavaScript",
  },
  {
    id: "jenkins",
    label: "Jenkins",
  },
  {
    id: "jira",
    label: "Jira",
  },
  {
    id: "json",
    label: "JSON",
  },
  {
    id: "jmeter",
    label: "JMeter",
  },
  {
    id: "junit",
    label: "JUnit",
  },
  {
    id: "julia",
    label: "Julia",
  },
  {
    id: "karma",
    label: "Karma",
  },
  {
    id: "keras",
    label: "Keras",
  },
  {
    id: "kibana",
    label: "Kibana",
  },
  {
    id: "kingfisher",
    label: "Kingfisher",
  },
  {
    id: "kotlin",
    label: "Kotlin",
  },
  {
    id: "kubernetes",
    label: "Kubernetes",
  },
  {
    id: "laravel",
    label: "Laravel",
  },
  {
    id: "linux",
    label: "Linux",
  },
  {
    id: "lodash",
    label: "Lodash",
  },
  {
    id: "log4j",
    label: "Log4j",
  },
  {
    id: "logstash",
    label: "Logstash",
  },
  {
    id: "mandrill",
    label: "Mandrill",
  },
  {
    id: "markdown",
    label: "Markdown",
  },
  {
    id: "matlab",
    label: "MATLAB",
  },
  {
    id: "matplotlib",
    label: "Matplotlib",
  },
  {
    id: "maven",
    label: "Maven",
  },
  {
    id: "mbed",
    label: "Mbed",
  },
  {
    id: "minic",
    label: "MinIO",
  },
  {
    id: "mocha",
    label: "Mocha",
  },
  {
    id: "mockito",
    label: "Mockito",
  },
  {
    id: "moment-js",
    label: "Moment.js",
  },
  {
    id: "mongodb",
    label: "MongoDB",
  },
  {
    id: "msgraph",
    label: "MS Project",
  },
  {
    id: "multigpu",
    label: "MultiGPU",
  },
  {
    id: "mysql",
    label: "MySQL",
  },
  {
    id: "net",
    label: ".Net",
  },
  {
    id: "netlify",
    label: "Netlify",
  },
  {
    id: "new-relic",
    label: "New Relic",
  },
  {
    id: "node-fetch",
    label: "Node-fetch",
  },
  {
    id: "node-js",
    label: "Node.js",
  },
  {
    id: "nodemailer",
    label: "Nodemailer",
  },
  {
    id: "next-js",
    label: "Next.js",
  },
  {
    id: "nginx",
    label: "Nginx",
  },
  {
    id: "npm",
    label: "npm",
  },
  {
    id: "numpy",
    label: "NumPy",
  },
  {
    id: "go",
    label: "Go",
  },
  {
    id: "google-cloud-platform",
    label: "Google Cloud Platform",
  },
  {
    id: "google-what-if",
    label: "Google What-If",
  },
  {
    id: "gpu-parallel-computing",
    label: "GPU Parallel Computing",
  },
  {
    id: "grafana",
    label: "Grafana",
  },
  {
    id: "graphql",
    label: "GraphQL",
  },
  {
    id: "heroku",
    label: "Heroku",
  },
  {
    id: "hasura",
    label: "Hasura",
  },
  {
    id: "html",
    label: "HTML",
  },
  {
    id: "influxdb",
    label: "InfluxDB",
  },
  {
    id: "iar-embedded-workbench",
    label: "IAR Embedded Workbench",
  },
  {
    id: "imagej",
    label: "ImageJ",
  },
  {
    id: "hugging-face",
    label: "Hugging Face",
  },
  {
    id: "helm",
    label: "Helm",
  },
  {
    id: "instruments",
    label: "Instruments",
  },
  {
    id: "ionic",
    label: "Ionic",
  },
  {
    id: "ionic-appflow",
    label: "Ionic Appflow",
  },
  {
    id: "java",
    label: "Java",
  },
  {
    id: "javascript",
    label: "JavaScript",
  },
  {
    id: "jmeter",
    label: "JMeter",
  },
  {
    id: "jira",
    label: "Jira",
  },
  {
    id: "json",
    label: "JSON",
  },
  {
    id: "junit",
    label: "JUnit",
  },
  {
    id: "julia",
    label: "Julia",
  },
  {
    id: "kafka",
    label: "Kafka",
  },
  {
    id: "karma",
    label: "Karma",
  },
  {
    id: "keras",
    label: "Keras",
  },
  {
    id: "kibana",
    label: "Kibana",
  },
  {
    id: "kingfisher",
    label: "Kingfisher",
  },
  {
    id: "kotlin",
    label: "Kotlin",
  },
  {
    id: "kubernetes",
    label: "Kubernetes",
  },
  {
    id: "laravel",
    label: "Laravel",
  },
  {
    id: "linux",
    label: "Linux",
  },
  {
    id: "lodash",
    label: "Lodash",
  },
  {
    id: "log4j",
    label: "Log4j",
  },
  {
    id: "logstash",
    label: "Logstash",
  },
  {
    id: "mandrill",
    label: "Mandrill",
  },
  {
    id: "markdown",
    label: "Markdown",
  },
  {
    id: "matlab",
    label: "MATLAB",
  },
  {
    id: "matplotlib",
    label: "Matplotlib",
  },
  {
    id: "maven",
    label: "Maven",
  },
  {
    id: "mbed",
    label: "Mbed",
  },
  {
    id: "minio",
    label: "MinIO",
  },
  {
    id: "mocha",
    label: "Mocha",
  },
  {
    id: "mockito",
    label: "Mockito",
  },
  {
    id: "moment-js",
    label: "Moment.js",
  },
  {
    id: "mongodb",
    label: "MongoDB",
  },
  {
    id: "ms-project",
    label: "MS Project",
  },
  {
    id: "multigpu",
    label: "MultiGPU",
  },
  {
    id: "mysql",
    label: "MySQL",
  },
  {
    id: "net",
    label: ".Net",
  },
  {
    id: "netlify",
    label: "Netlify",
  },
  {
    id: "new-relic",
    label: "New Relic",
  },
  {
    id: "node-fetch",
    label: "Node-fetch",
  },
  {
    id: "node-js",
    label: "Node.js",
  },
  {
    id: "nodemailer",
    label: "Nodemailer",
  },
  {
    id: "next-js",
    label: "Next.js",
  },
  {
    id: "nginx",
    label: "Nginx",
  },
  {
    id: "npm",
    label: "npm",
  },
  {
    id: "numpy",
    label: "NumPy",
  },
  {
    id: "nupic",
    label: "NuPIC",
  },
  {
    id: "nvidia-rapids",
    label: "NVIDIA RAPIDS (GPU Acceleration)",
  },
  {
    id: "nvidia-tensorrt",
    label: "NVIDIA TensorRT (Low Precision Inference)",
  },
  {
    id: "nvidia-xgboost",
    label: "NVIDIA XGBoost",
  },
  {
    id: "objective-c",
    label: "Objective-C",
  },
  {
    id: "objectmapper",
    label: "ObjectMapper",
  },
  {
    id: "opencv",
    label: "OpenCV",
  },
  {
    id: "oci",
    label: "OCI",
  },
  {
    id: "open3d",
    label: "Open3D",
  },
  {
    id: "oracle",
    label: "Oracle",
  },
  {
    id: "oracledb",
    label: "OracleDB",
  },
  {
    id: "origin-pro",
    label: "OriginPro",
  },
  {
    id: "packer",
    label: "Packer",
  },
  {
    id: "pandas",
    label: "Pandas",
  },
  {
    id: "perl",
    label: "Perl",
  },
  {
    id: "php",
    label: "PHP",
  },
  {
    id: "pil",
    label: "PIL",
  },
  {
    id: "platformio",
    label: "PlatformIO",
  },
  {
    id: "postgresql",
    label: "PostgreSQL",
  },
  {
    id: "prestashop",
    label: "PrestaShop",
  },
  {
    id: "prometheus",
    label: "Prometheus",
  },
  {
    id: "pyspark",
    label: "PySpark",
  },
  {
    id: "pytest",
    label: "Pytest",
  },
  {
    id: "python",
    label: "Python",
  },
  {
    id: "pyunit",
    label: "PyUnit",
  },
  {
    id: "qt",
    label: "Qt",
  },
  {
    id: "qubole",
    label: "Qubole",
  },
  {
    id: "r",
    label: "R",
  },
  {
    id: "rabbitmq",
    label: "RabbitMQ",
  },
  {
    id: "raspberrypi",
    label: "Raspberry Pi",
  },
  {
    id: "rds",
    label: "RDS",
  },
  {
    id: "redis",
    label: "Redis",
  },
  {
    id: "react",
    label: "React",
  },
  {
    id: "realm",
    label: "Realm",
  },
  {
    id: "resque",
    label: "Resque",
  },
  {
    id: "redux",
    label: "Redux",
  },
  {
    id: "redux-saga",
    label: "Redux-Saga",
  },
  {
    id: "rest",
    label: "REST",
  },
  {
    id: "retrofit",
    label: "Retrofit",
  },
  {
    id: "riemann",
    label: "Riemann",
  },
  {
    id: "ruby",
    label: "Ruby",
  },
  {
    id: "ruby-on-rails",
    label: "Ruby on Rails",
  },
  {
    id: "rust",
    label: "Rust",
  },
  {
    id: "rxjava",
    label: "RxJava",
  },
  {
    id: "rxswift",
    label: "RxSwift",
  },
  {
    id: "sanity",
    label: "Sanity",
  },
  {
    id: "scala",
    label: "Scala",
  },
  {
    id: "scikit-image",
    label: "Scikit-image",
  },
  {
    id: "scikit-learn",
    label: "scikit-learn",
  },
  {
    id: "scribes-reader",
    label: "Scribes Reader",
  },
  {
    id: "scrum",
    label: "Scrum",
  },
  {
    id: "scipy",
    label: "SciPy",
  },
  {
    id: "seaborn",
    label: "Seaborn",
  },
  {
    id: "selenium",
    label: "Selenium",
  },
  {
    id: "sendgrid",
    label: "SendGrid",
  },
  {
    id: "shallow",
    label: "Shallow",
  },
  {
    id: "shopify",
    label: "Shopify",
  },
  {
    id: "sidekiq",
    label: "SideKiq",
  },
  {
    id: "sinon",
    label: "Sinon",
  },
  {
    id: "sketch",
    label: "Sketch",
  },
  {
    id: "smarty",
    label: "Smarty",
  },
  {
    id: "snapkit",
    label: "Snapkit",
  },
  {
    id: "soap",
    label: "SOAP",
  },
  {
    id: "sonarqube",
    label: "SonarQube",
  },
  {
    id: "spring",
    label: "Spring",
  },
  {
    id: "spring-boot",
    label: "Spring Boot",
  },
  {
    id: "sprint",
    label: "Sprint",
  },
  {
    id: "sqlalchemy",
    label: "SQLAlchemy",
  },
  {
    id: "sqlite",
    label: "SQLite",
  },
  {
    id: "sql-server",
    label: "SQL Server",
  },
  {
    id: "sql",
    label: "SQL",
  },
  {
    id: "ssrs",
    label: "SSRS",
  },
  {
    id: "statsmodels",
    label: "Statsmodels",
  },
  {
    id: "stimulusjs",
    label: "StimulusJS",
  },
  {
    id: "storybook",
    label: "Storybook",
  },
  {
    id: "svelte",
    label: "Svelte",
  },
  {
    id: "swagger",
    label: "Swagger",
  },
  {
    id: "swift",
    label: "Swift",
  },
  {
    id: "swift-playgrounds",
    label: "Swift Playgrounds",
  },
  {
    id: "swiftui",
    label: "SwiftUI",
  },
  {
    id: "swiftyjson",
    label: "SwiftyJSON",
  },
  {
    id: "tailwind-css",
    label: "Tailwind CSS",
  },
  {
    id: "t3",
    label: "T3",
  },
  {
    id: "tensorflow",
    label: "TensorFlow",
  },
  {
    id: "tableau",
    label: "Tableau",
  },
  {
    id: "terragrunt",
    label: "Terragrunt",
  },
  {
    id: "terraform",
    label: "Terraform",
  },
  {
    id: "testflight",
    label: "TestFlight",
  },
  {
    id: "testng",
    label: "TestNG",
  },
  {
    id: "tflite",
    label: "TFlite",
  },
  {
    id: "travisci",
    label: "TravisCI",
  },
  {
    id: "travisci",
    label: "Travis CI",
  },
  {
    id: "typescript",
    label: "TypeScript",
  },
  {
    id: "uikit",
    label: "UIKit",
  },
  {
    id: "unity",
    label: "Unity",
  },
  {
    id: "unreal-engine",
    label: "Unreal Engine",
  },
  {
    id: "vercel",
    label: "Vercel",
  },
  {
    id: "virtualbox",
    label: "Virtual Box",
  },
  {
    id: "visual-studio-code",
    label: "Visual Studio Code",
  },
  {
    id: "vmware",
    label: "VMware",
  },
  {
    id: "vue-js",
    label: "Vue.js",
  },
  {
    id: "wavefront",
    label: "Wavefront",
  },
  {
    id: "webpack",
    label: "Webpack",
  },
  {
    id: "windows",
    label: "Windows",
  },
  {
    id: "wordpress",
    label: "WordPress",
  },
  {
    id: "xcode",
    label: "Xcode",
  },
  {
    id: "xml",
    label: "XML",
  },
  {
    id: "yarn",
    label: "yarn",
  },
  {
    id: "zephyr",
    label: "Zephyr",
  },
  {
    id: "yaml",
    label: "Yaml",
  },
];

const programmingLanguages = [
  { id: "dart", label: "Dart" },
  { id: "elm", label: "Elm" },
  { id: "java", label: "Java" },
  { id: "kotlin", label: "Kotlin" },
  { id: "php", label: "PHP" },
  { id: "r", label: "R" },
  { id: "rust", label: "Rust" },
  { id: "swift", label: "Swift" },
  { id: "elixir", label: "Elixir" },
  { id: "go", label: "Go" },
  { id: "javascript", label: "JavaScript" },
  { id: "objective-c", label: "Objective-C" },
  { id: "python", label: "Python" },
  { id: "ruby", label: "Ruby" },
  { id: "scala", label: "Scala" },
  { id: "typescript", label: "TypeScript" },
];

type CheckboxRef = {
  updateSelectedItems: (newSelectedItems: Set<string>) => void;
  getSelectedItems: () => string[];
  deselectItem: (itemId: string) => void;
};

export default function UpdateSkills() {
  const { setSliderRange } = useStepSlider();
  setSliderRange(72);
  const { toast } = useToast();
  const router = useRouter();

  const [isValidForm, setIsValidForm] = useState(false);
  // Proficient States
  const [proficientList, setProficientList] = useState([
    {
      id: "",
      label: "",
    },
  ]);
  const [searchProficientTerm, setSearchProficientTerm] = useState("");
  const [selectProficientList, setSelectProficientList] = useState<
    { id: string; label: string }[]
  >([]);
  const proficientListCheckboxRef = useRef<CheckboxRef | null>(null);

  // Exposure States
  const [exposureList, setExposureList] = useState([
    {
      id: "",
      label: "",
    },
  ]);
  const [searchExposureTerm, setSearchExposureTerm] = useState("");
  const [selectExposureList, setSelectExposureList] = useState<
    { id: string; label: string }[]
  >([]);
  const exposureListCheckboxRef = useRef<CheckboxRef | null>(null);

  // Update Proficient List based on search term
  useEffect(() => {
    if (!searchProficientTerm) {
      setProficientList([...skills]);
    } else {
      const matchesList = [...skills].filter((item) =>
        item.label
          .toLowerCase()
          .trim()
          .includes(searchProficientTerm.toLowerCase().trim())
      );
      setProficientList(matchesList);
    }
  }, [searchProficientTerm]);

  // Update Exposure List based on search term
  useEffect(() => {
    if (!searchExposureTerm) {
      setExposureList([...skills]);
    } else {
      const matchesList = [...skills].filter((item) =>
        item.label
          .toLowerCase()
          .trim()
          .includes(searchExposureTerm.toLowerCase().trim())
      );
      setExposureList(matchesList);
    }
  }, [searchExposureTerm]);

  // Function to update Proficient List
  function updateProficientList(id: string, remove = false) {
    if (remove) {
      proficientListCheckboxRef?.current?.deselectItem(id);
    }
  }

  // Function to update Exposure List
  function updateExposureList(id: string, remove = false) {
    if (remove) {
      exposureListCheckboxRef?.current?.deselectItem(id);
    }
  }

  // select programming language
  const [currentProgrammingLanguage, setCurrentProgrammingLanguage] = useState<
    string | null
  >(null);

  const [optionalProgrammingLanguage, setOptionalProgrammingLanguage] =
    useState<string | null>(null);

  useEffect(() => {
    setIsValidForm(
      selectExposureList.length > 2 &&
        selectProficientList.length > 2 &&
        !!currentProgrammingLanguage
    );
  }, [selectExposureList, selectProficientList, currentProgrammingLanguage]);

  function goToNext() {
    router.push("/onboarding/update-education");
    toast({
      title: "Your data have been recorded",
    });
  }
  const filterProficientList = proficientList.filter((item) => {
    const res = selectExposureList.map((item) => item.id);
    return !res.includes(item.id);
  });

  const filterExposureList = exposureList.filter((item) => {
    const res = selectProficientList.map((item) => item.id);
    return !res.includes(item.id);
  });

  return (
    <div>
      <Card className={cn("sm:w-[680px] border-none shadow-none bg-[#E5E7EB]")}>
        <CardHeader className="sm:w-[90%] flex flex-col gap-[1rem]">
          <CardTitle className="text-center leading-8 tracking-normal">
            Update Your Skills
          </CardTitle>
          <CardDescription className="text-center text-[1rem] text-dark">
            Let us know your technical skills your best with so we can improve
            your job application quality
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 rounded-[15px] bg-[#FFFFFF] pt-[1.3rem] mb-8">
          <div className="space-y-5">
            <div className="flex items-center justify-start flex-wrap gap-3">
              {Array.from(selectProficientList).map((item, idx) => {
                return (
                  <Button
                    key={idx}
                    variant={"outline"}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      updateProficientList(item.id, true);
                    }}
                    className="z-40 relative border px-6 py-0 h-10 outline-none bg-transparent  flex items-center justify-between w-min"
                  >
                    <span>{item.label}</span>
                    <X size={16} className="absolute top-[2px] right-[2px]" />
                  </Button>
                );
              })}
            </div>
            <SearchInputWithLabel
              setSearchTerm={setSearchProficientTerm}
              placeholderText={"Search technology"}
            >
              <Label htmlFor="proficient" className="text-[1rem]">
                Proficient
              </Label>
            </SearchInputWithLabel>
            <div>
              <CheckboxFormMultiple
                ref={proficientListCheckboxRef}
                items={filterProficientList}
                setSelectList={setSelectProficientList}
              >
                <div className="space-y-2">
                  <div className="mt-4 flex items-start gap-3">
                    <Info
                      size={40}
                      className="text-neutral-600 sm:block hidden"
                    />
                    <p className="sm:text-[0.85rem] text-[.9rem]  font-light">
                      At ApplyPass, we define proficiency as a skill where you
                      could do an interview to prove your capability on demand.
                      You are comfortable and confident without any advance
                      notice or preparation.
                    </p>
                  </div>
                  <span className="text-neutral-600 text-sm">
                    Select minimum 3 skills.
                  </span>
                </div>
              </CheckboxFormMultiple>
            </div>
          </div>
        </CardContent>

        <CardContent className="grid gap-4 rounded-[15px] bg-[#FFFFFF] pt-[1.3rem] mb-8">
          <div className="space-y-5">
            <div className="flex items-center justify-start flex-wrap gap-3">
              {Array.from(selectExposureList).map((item, idx) => {
                return (
                  <Button
                    key={idx}
                    variant={"outline"}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      updateExposureList(item.id, true);
                    }}
                    className="z-40 relative border px-6 py-0 h-10 outline-none bg-transparent  flex items-center justify-between w-min"
                  >
                    <span>{item.label}</span>
                    <X size={16} className="absolute top-[2px] right-[2px]" />
                  </Button>
                );
              })}
            </div>
            <SearchInputWithLabel
              setSearchTerm={setSearchExposureTerm}
              placeholderText={"Search technology"}
            >
              <Label htmlFor="exposure" className="text-[1rem]">
                Exposure
              </Label>
            </SearchInputWithLabel>
            <div>
              <CheckboxFormMultiple
                ref={exposureListCheckboxRef}
                items={filterExposureList}
                setSelectList={setSelectExposureList}
              >
                <div className="space-y-2">
                  <div className="mt-4 flex items-start gap-3">
                    <Info
                      size={40}
                      className="text-neutral-600 sm:block hidden"
                    />
                    <p className="sm:text-[0.85rem] text-[.9rem]  font-light">
                      At ApplyPass, we define exposure as having enough
                      familiarity with a skill to understand its basic concepts
                      and functionalities. While you might not be ready to
                      perform it under interview conditions without preparation,
                      you can engage with it and continue learning through
                      experience.
                    </p>
                  </div>
                  <span className="text-neutral-600 text-sm">
                    Select minimum 3 skills.
                  </span>
                </div>
              </CheckboxFormMultiple>
            </div>
          </div>
        </CardContent>

        <CardContent className="grid gap-4 rounded-[15px] bg-[#FFFFFF] pt-[1.3rem] mb-8">
          <div className="space-y-5">
            <div className="space-y-2">
              <p>What is your primary programming language?</p>
            </div>
            <div>
              <SelectItemsList
                selectList={selectProficientList}
                setCurrentSelection={setCurrentProgrammingLanguage}
                placeholder="Choose an option..."
                currentSelection={currentProgrammingLanguage}
              />
              <div className="mt-4 flex items-start gap-3">
                <Info size={40} className="text-neutral-600 sm:block hidden" />
                <p className="sm:text-[0.85rem] text-[.9rem]  font-light">
                  This means the programming language for which you are
                  strongest and most experienced for your next job. This is the
                  programming language you would likely interview in and the
                  language you would most like to work in next. This is how we
                  will match you to jobs.
                </p>
              </div>
            </div>
          </div>
        </CardContent>

        <CardContent className="grid gap-4 rounded-[15px] bg-[#FFFFFF] pt-[1.3rem] mb-8">
          <div className="space-y-5">
            <div className="space-y-2">
              <p>What is your alternate programming language? (optional)</p>
            </div>
            <div>
              <SelectItemsList
                selectList={selectProficientList}
                setCurrentSelection={setOptionalProgrammingLanguage}
                placeholder="Choose an option..."
                currentSelection={optionalProgrammingLanguage}
              />
              <div className="mt-4 flex items-start gap-3">
                <Info size={40} className="text-neutral-600 sm:block hidden" />
                <p className="sm:text-[0.85rem] text-[.9rem]  font-light">
                  This means the programming language you might enjoy working in
                  for your next job. We will use these programming languages to
                  match you to additional jobs.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex items-center sm:flex-row  flex-col gap-4 w-full">
            <Button
              onClick={() => {
                router.back();
              }}
              className="w-full py-6 text-center text-[1rem] rounded-full text-[var(--base-hover)] bg-white hover:bg-white/60 border border-[var(--base-hover)] hover:border-[var(--base-hover)] transition-all"
            >
              Go back
            </Button>
            {isValidForm ? (
              <Button
                onClick={goToNext}
                className="w-full py-6 text-center text-white text-[1rem] rounded-full bg-[var(--base)] hover:bg-[var(--base-hover)] transition-all"
              >
                Continue
              </Button>
            ) : (
              <Button disabled className="w-full py-6 text-[1rem] rounded-full">
                Continue
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
