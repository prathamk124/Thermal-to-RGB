import { useState } from "react";
import {
  Home,
  Upload,
  History,
  BarChart3,
  Info,
  Settings,
  Zap,
  ArrowRight,
  Download,
  Sparkles,
  Image as ImageIcon,
  Clock,
  Trash2,
  Maximize2,
  RotateCcw,
  Search,
  ChevronDown
} from "lucide-react";

import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [selectedImage, setSelectedImage] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleUpload = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setSelectedImage(URL.createObjectURL(file));
    setFileName(file.name);
    setPage("convert");
  };

  const goToConvert = () => {
    setPage("convert");
  };

  return (
    <div className="app">

      {/* ================= SIDEBAR ================= */}

      {page !== "home" && (
        <Sidebar
          page={page}
          setPage={setPage}
        />
      )}

      <main className={page === "home" ? "main full" : "main"}>

        {/* ================= TOP NAVBAR ================= */}

        <header className="topbar">

          <div className="brand">
            <div className="brand-icon">
              <Zap size={21} />
            </div>

            <span>ThermoVision</span>
          </div>

          <nav className="top-navigation">

            <button onClick={() => setPage("home")}>
              Home
            </button>

            <button onClick={goToConvert}>
              Features
            </button>

            <button onClick={goToConvert}>
              How it Works
            </button>

            <button onClick={goToConvert}>
              Datasets
            </button>

            <button>
              About
            </button>

          </nav>

          <div className="profile">

            <div className="profile-avatar">
              P
            </div>

            <span>Pratham</span>

            <ChevronDown size={15} />

          </div>

        </header>


        {/* ================= HOME ================= */}

        {page === "home" && (
          <HomePage
            setPage={setPage}
          />
        )}


        {/* ================= CONVERT ================= */}

        {page === "convert" && (
          <ConvertPage
            selectedImage={selectedImage}
            fileName={fileName}
            handleUpload={handleUpload}
            setPage={setPage}
          />
        )}


        {/* ================= RESULT ================= */}

        {page === "result" && (
          <ResultPage
            selectedImage={selectedImage}
            fileName={fileName}
            setPage={setPage}
          />
        )}


        {/* ================= HISTORY ================= */}

        {page === "history" && (
          <HistoryPage />
        )}

      </main>

    </div>
  );
}


/* =========================================================
   SIDEBAR
========================================================= */

function Sidebar({ page, setPage }) {

  return (
    <aside className="sidebar">

      <div className="sidebar-brand">

        <div className="brand-icon">
          <Zap size={21} />
        </div>

        <span>ThermoVision</span>

      </div>


      <div className="sidebar-menu">

        <button
          className={page === "convert" ? "sidebar-active" : ""}
          onClick={() => setPage("convert")}
        >
          <Upload size={18} />
          Convert Image
        </button>


        <button
          className={page === "home" ? "sidebar-active" : ""}
          onClick={() => setPage("home")}
        >
          <Home size={18} />
          Dashboard
        </button>


        <button
          className={page === "history" ? "sidebar-active" : ""}
          onClick={() => setPage("history")}
        >
          <History size={18} />
          History
        </button>


        <button>
          <BarChart3 size={18} />
          Analytics
        </button>


        <button>
          <Info size={18} />
          About Project
        </button>


        <button>
          <Settings size={18} />
          Settings
        </button>

      </div>

    </aside>
  );
}


/* =========================================================
   HOME PAGE
========================================================= */

function HomePage({ setPage }) {

  return (
    <section className="home-page">

      <div className="hero-section">

        {/* LEFT */}

        <div className="hero-content">

          <div className="ai-badge">
            <Sparkles size={15} />
            AI Powered Image Translation
          </div>


          <h1>
            Thermal to Visible
            <span> Image Conversion</span>
          </h1>


          <p>
            Transform thermal infrared images into
            high-quality visible RGB images using
            deep learning and semantic understanding.
          </p>


          <div className="hero-actions">

            <button
              className="primary-button"
              onClick={() => setPage("convert")}
            >
              Start Conversion
              <ArrowRight size={18} />
            </button>


            <button className="secondary-button">
              Learn More
            </button>

          </div>

        </div>


        {/* RIGHT VISUAL */}

        <div className="hero-image-comparison">

          <div className="thermal-preview">

            <div className="image-label">
              THERMAL
            </div>

            <div className="thermal-art">

              <div className="thermal-sun"></div>

              <div className="thermal-building"></div>

              <div className="thermal-tree tree-one"></div>
              <div className="thermal-tree tree-two"></div>

              <div className="thermal-car car-one"></div>
              <div className="thermal-car car-two"></div>

            </div>

          </div>


          <div className="comparison-divider">
            <div className="comparison-arrow">
              ↔
            </div>
          </div>


          <div className="rgb-preview">

            <div className="image-label">
              VISIBLE RGB
            </div>

            <div className="rgb-art">

              <div className="rgb-light"></div>

              <div className="rgb-building"></div>

              <div className="rgb-tree rgb-tree-one"></div>
              <div className="rgb-tree rgb-tree-two"></div>

              <div className="rgb-road"></div>

              <div className="rgb-car rgb-car-one"></div>
              <div className="rgb-car rgb-car-two"></div>

            </div>

          </div>

        </div>

      </div>


      {/* FEATURES */}

      <div className="feature-grid">

        <FeatureCard
          icon={<ImageIcon size={21} />}
          title="Semantic Segmentation"
          description="Understand scene structure for accurate image reconstruction."
        />


        <FeatureCard
          icon={<Sparkles size={21} />}
          title="Attention Network"
          description="Focus on important objects, structures and textures."
        />


        <FeatureCard
          icon={<ImageIcon size={21} />}
          title="High Quality Output"
          description="Generate natural and realistic visible images."
        />


        <FeatureCard
          icon={<BarChart3 size={21} />}
          title="Evaluation Metrics"
          description="Evaluate results using PSNR, SSIM and LPIPS."
        />

      </div>


      {/* HOW IT WORKS */}

      <div className="how-section">

        <div className="section-title">

          <span>HOW IT WORKS</span>

          <h2>
            From Thermal Data to
            <strong> Visible Intelligence</strong>
          </h2>

        </div>


        <div className="steps">

          <Step
            number="01"
            title="Upload"
            text="Upload a thermal infrared image."
          />

          <Step
            number="02"
            title="Analyze"
            text="Our model extracts semantic information."
          />

          <Step
            number="03"
            title="Translate"
            text="Deep learning reconstructs the visible scene."
          />

          <Step
            number="04"
            title="Evaluate"
            text="Measure quality using image metrics."
          />

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   CONVERT PAGE
========================================================= */

function ConvertPage({
  selectedImage,
  fileName,
  handleUpload,
  setPage
}) {

  return (
    <section className="dashboard-page">

      <div className="page-header">

        <div>

          <div className="page-label">
            IMAGE TRANSLATION
          </div>

          <h1>
            Convert Thermal Image
          </h1>

          <p>
            Upload a thermal infrared image and generate
            a visible RGB image using our AI model.
          </p>

        </div>

      </div>


      {!selectedImage && (

        <label className="upload-area">

          <div className="upload-icon">
            <Upload size={35} />
          </div>

          <h2>
            Drag & drop a thermal image here
          </h2>

          <p>
            or click to browse from your computer
          </p>

          <span className="upload-button">
            Choose Image
          </span>

          <small>
            JPG, JPEG or PNG • Maximum size 10 MB
          </small>

          <input
            type="file"
            accept="image/png,image/jpeg,image/jpg"
            onChange={handleUpload}
            hidden
          />

        </label>

      )}


      {selectedImage && (

        <div className="selected-image-section">

          <div className="selected-image-card">

            <div className="card-header">

              <div>
                <span className="card-label">
                  INPUT IMAGE
                </span>

                <h3>{fileName}</h3>
              </div>

              <button
                className="small-button"
                onClick={() => setPage("convert")}
              >
                <RotateCcw size={16} />
                Change
              </button>

            </div>


            <img
              src={selectedImage}
              alt="Thermal input"
              className="uploaded-preview"
            />


            <button
              className="primary-button convert-button"
              onClick={() => setPage("result")}
            >
              Convert to RGB
              <ArrowRight size={18} />
            </button>

          </div>

        </div>

      )}


      {/* EXAMPLES */}

      <div className="examples-section">

        <div className="section-heading">

          <div>
            <span className="page-label">
              DEMO DATA
            </span>

            <h2>
              Example Thermal Images
            </h2>
          </div>

        </div>


        <div className="example-grid">

          <ExampleImage
            type="person"
            title="Thermal Person"
          />

          <ExampleImage
            type="car"
            title="Thermal Vehicle"
          />

          <ExampleImage
            type="building"
            title="Thermal Building"
          />

          <ExampleImage
            type="road"
            title="Thermal Road"
          />

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   RESULT PAGE
========================================================= */

function ResultPage({
  selectedImage,
  fileName,
  setPage
}) {

  return (
    <section className="dashboard-page">

      <div className="page-header">

        <div>

          <div className="page-label">
            CONVERSION COMPLETE
          </div>

          <h1>
            Conversion Result
          </h1>

          <p>
            Compare the original thermal image with
            the generated visible RGB image.
          </p>

        </div>

      </div>


      <div className="result-grid">

        {/* THERMAL */}

        <div className="result-card">

          <div className="result-card-header">

            <div>

              <span>
                INPUT
              </span>

              <h3>
                Thermal Image
              </h3>

            </div>

            <Maximize2 size={18} />

          </div>


          {selectedImage ? (

            <img
              src={selectedImage}
              alt="Thermal"
              className="result-image"
            />

          ) : (

            <div className="result-placeholder thermal-placeholder">
              Thermal Image
            </div>

          )}

        </div>


        {/* RGB */}

        <div className="result-card">

          <div className="result-card-header">

            <div>

              <span>
                OUTPUT
              </span>

              <h3>
                Generated Visible Image
              </h3>

            </div>

            <Maximize2 size={18} />

          </div>


          <div className="generated-image">

            <div className="generated-night-sky"></div>

            <div className="generated-building"></div>

            <div className="generated-road"></div>

            <div className="generated-car generated-car-one"></div>
            <div className="generated-car generated-car-two"></div>

          </div>

        </div>

      </div>


      {/* COMPARISON SLIDER */}

      <div className="comparison-panel">

        <div className="comparison-panel-header">

          <span>
            VISUAL COMPARISON
          </span>

          <small>
            Thermal ←→ Visible
          </small>

        </div>


        <div className="fake-slider">

          <div className="slider-thermal"></div>

          <div className="slider-visible"></div>

          <div className="slider-handle">
            ↔
          </div>

        </div>

      </div>


      {/* METRICS */}

      <div className="metric-grid">

        <MetricCard
          title="PSNR"
          value="28.46"
          unit="dB"
          description="Peak Signal-to-Noise Ratio"
        />

        <MetricCard
          title="SSIM"
          value="0.912"
          unit=""
          description="Structural Similarity"
        />

        <MetricCard
          title="LPIPS"
          value="0.124"
          unit=""
          description="Perceptual Similarity"
        />

        <MetricCard
          title="Processing"
          value="2.3"
          unit="sec"
          description="Inference Time"
        />

      </div>


      {/* ACTIONS */}

      <div className="result-actions">

        <button className="primary-button">

          <Download size={18} />

          Download Result

        </button>


        <button
          className="secondary-button"
          onClick={() => setPage("convert")}
        >

          <RotateCcw size={18} />

          Process Another Image

        </button>

      </div>

    </section>
  );
}


/* =========================================================
   HISTORY PAGE
========================================================= */

function HistoryPage() {

  const history = [
    {
      name: "thermal_road_01.jpg",
      date: "28 Sep 2026",
      time: "09:42 AM",
      psnr: "28.46",
      ssim: "0.912",
      lpips: "0.124"
    },
    {
      name: "thermal_building.jpg",
      date: "27 Sep 2026",
      time: "07:22 PM",
      psnr: "26.31",
      ssim: "0.876",
      lpips: "0.158"
    },
    {
      name: "thermal_vehicle.jpg",
      date: "26 Sep 2026",
      time: "11:10 AM",
      psnr: "29.03",
      ssim: "0.918",
      lpips: "0.112"
    },
    {
      name: "thermal_person.jpg",
      date: "25 Sep 2026",
      time: "05:36 PM",
      psnr: "27.14",
      ssim: "0.891",
      lpips: "0.141"
    },
    {
      name: "thermal_scene.jpg",
      date: "23 Sep 2026",
      time: "09:12 AM",
      psnr: "25.67",
      ssim: "0.843",
      lpips: "0.176"
    }
  ];

  return (
    <section className="dashboard-page">

      <div className="page-header">

        <div>

          <div className="page-label">
            CONVERSION LOG
          </div>

          <h1>
            Processing History
          </h1>

          <p>
            View your previous thermal-to-visible conversions
            and evaluation results.
          </p>

        </div>

      </div>


      <div className="history-container">

        <div className="history-toolbar">

          <div className="search-box">

            <Search size={17} />

            <input
              placeholder="Search by date or filename..."
            />

          </div>


          <select>

            <option>
              All Time
            </option>

            <option>
              Today
            </option>

            <option>
              This Week
            </option>

          </select>

        </div>


        <div className="history-table-header">

          <span>#</span>
          <span>INPUT</span>
          <span>OUTPUT</span>
          <span>FILE / DATE</span>
          <span>METRICS</span>
          <span>ACTIONS</span>

        </div>


        {history.map((item, index) => (

          <div
            className="history-row"
            key={item.name}
          >

            <span className="row-number">
              {index + 1}
            </span>


            <div className="history-thumbnail thermal-thumbnail">
              IR
            </div>


            <div className="history-thumbnail visible-thumbnail">
              RGB
            </div>


            <div className="history-file">

              <strong>
                {item.name}
              </strong>

              <small>
                {item.date} • {item.time}
              </small>

            </div>


            <div className="history-metrics">

              <span>
                PSNR: {item.psnr}
              </span>

              <span>
                SSIM: {item.ssim}
              </span>

              <span>
                LPIPS: {item.lpips}
              </span>

            </div>


            <div className="history-actions">

              <button>
                <Download size={16} />
              </button>

              <button>
                <Trash2 size={16} />
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}


/* =========================================================
   SMALL COMPONENTS
========================================================= */

function FeatureCard({
  icon,
  title,
  description
}) {

  return (
    <div className="feature-card">

      <div className="feature-icon">
        {icon}
      </div>

      <h3>
        {title}
      </h3>

      <p>
        {description}
      </p>

    </div>
  );
}


function Step({
  number,
  title,
  text
}) {

  return (
    <div className="step">

      <span>
        {number}
      </span>

      <div>

        <h3>
          {title}
        </h3>

        <p>
          {text}
        </p>

      </div>

    </div>
  );
}


function MetricCard({
  title,
  value,
  unit,
  description
}) {

  return (
    <div className="metric-card">

      <div className="metric-icon">
        <BarChart3 size={19} />
      </div>

      <span>
        {title}
      </span>

      <strong>
        {value} {unit}
      </strong>

      <small>
        {description}
      </small>

    </div>
  );
}


function ExampleImage({
  type,
  title
}) {

  return (
    <div className="example-card">

      <div className={`example-visual ${type}`}>

        <div className="example-glow"></div>

        <div className="example-object"></div>

      </div>

      <div className="example-info">

        <span>
          THERMAL SAMPLE
        </span>

        <strong>
          {title}
        </strong>

      </div>

    </div>
  );
}


export default App;