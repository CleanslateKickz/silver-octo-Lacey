# My Webpages

This repository contains three different webpages.  
You can preview them below by switching between the tabs.

---

<style>
.tabs {
  display: flex;
  flex-wrap: wrap;
}
.tabs label {
  padding: 8px 16px;
  cursor: pointer;
  background: #ddd;
  margin-right: 4px;
  border-radius: 4px 4px 0 0;
}
.tabs input[type="radio"] {
  display: none;
}
.tab {
  display: none;
  width: 100%;
  border: 1px solid #ddd;
  border-top: none;
  padding: 16px;
}
input[type="radio"]:checked + label {
  background: #fff;
  border-bottom: 1px solid white;
}
#tab1:checked ~ #content1,
#tab2:checked ~ #content2,
#tab3:checked ~ #content3 {
  display: block;
}
</style>

<div class="tabs">
  <input type="radio" id="tab1" name="tab-group" checked>
  <label for="tab1">Webpage 1</label>
  
  <input type="radio" id="tab2" name="tab-group">
  <label for="tab2">Webpage 2</label>
  
  <input type="radio" id="tab3" name="tab-group">
  <label for="tab3">Webpage 3</label>
  
  <div id="content1" class="tab">
    <img src="screenshot1.png" alt="Screenshot of Webpage 1" width="600">
  </div>
  <div id="content2" class="tab">
    <img src="screenshot2.png" alt="Screenshot of Webpage 2" width="600">
  </div>
  <div id="content3" class="tab">
    <img src="screenshot3.png" alt="Screenshot of Webpage 3" width="600">
  </div>
</div>
