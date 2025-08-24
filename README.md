<!--
README.md
A simple README for a GitHub repo with a tabbed component to display three webpage screenshots.

Notes:
- GitHub's Markdown supports basic HTML, so we use a pure HTML/CSS solution without JS.
- Uses radio inputs + labels to simulate tabs and CSS to show/hide relevant screenshots.
- Replace the image sources (src) with your actual screenshot paths.
-->

# Project Title

A short description of the project and what these three webpages represent.

## Preview

<!-- Tabbed interface -->
<div class="tabs">

  <!-- Tab controls (radio buttons) -->
  <input type="radio" id="tab-1" name="tabs" checked />
  <input type="radio" id="tab-2" name="tabs" />
  <input type="radio" id="tab-3" name="tabs" />

  <!-- Tab labels -->
  <div class="tab-labels">
    <label for="tab-1">Home</label>
    <label for="tab-2">Dashboard</label>
    <label for="tab-3">Settings</label>
  </div>

  <!-- Tab content -->
  <div class="tab-content">
    <section class="panel panel-1">
      <img src="screenshots/home.png" alt="Homepage screenshot" />
    </section>
    <section class="panel panel-2">
      <img src="screenshots/dashboard.png" alt="Dashboard screenshot" />
    </section>
    <section class="panel panel-3">
      <img src="screenshots/settings.png" alt="Settings screenshot" />
    </section>
  </div>
</div>

<!-- Styles: kept inline for GitHub compatibility -->
<style>
  /* Container */
  .tabs {
    border: 1px solid #e1e4e8;
    border-radius: 6px;
    overflow: hidden;
    display: block;
  }

  /* Hide radios but keep accessible */
  .tabs > input[type="radio"] {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  /* Tab labels row */
  .tab-labels {
    display: flex;
    gap: 0;
    border-bottom: 1px solid #e1e4e8;
    background: #f6f8fa;
  }

  .tab-labels label {
    cursor: pointer;
    padding: 10px 14px;
    font-weight: 600;
    color: #24292f;
    border-right: 1px solid #e1e4e8;
    user-select: none;
  }

  .tab-labels label:last-child {
    border-right: 0;
  }

  /* Panels wrapper */
  .tab-content {
    background: #fff;
  }

  .panel {
    display: none;
    padding: 12px;
  }

  /* Active tab highlighting and panel visibility */
  #tab-1:checked ~ .tab-labels label[for="tab-1"],
  #tab-2:checked ~ .tab-labels label[for="tab-2"],
  #tab-3:checked ~ .tab-labels label[for="tab-3"] {
    background: #fff;
    border-bottom: 2px solid #0969da;
    color: #0969da;
  }

  #tab-1:checked ~ .tab-content .panel-1,
  #tab-2:checked ~ .tab-content .panel-2,
  #tab-3:checked ~ .tab-content .panel-3 {
    display: block;
  }

  /* Image sizing */
  .panel img {
    max-width: 100%;
    height: auto;
    border-radius: 6px;
    border: 1px solid #e1e4e8;
  }
</style>

## Getting Started

- Replace the placeholder images in the screenshots/ directory:
  - screenshots/home.png
  - screenshots/dashboard.png
  - screenshots/settings.png
- Optionally rename the tab labels in the HTML above to match your pages.

## Repository Structure

- src/ or pages/: Your source code for each webpage.
- screenshots/: PNG/JPG screenshots used in the tabs.
- README.md: This file.

## Contributing

- Fork the repo, create a feature branch, and open a PR.

## License

MIT
