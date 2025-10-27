const scr = document.currentScript;
const rawConfig = scr.getAttribute('data-config');
const {
checkedCategories,
compliance,
customization,
settings,

} = JSON.parse(rawConfig);
console.log(config)
const custom = customization || {
    bannerAlignment: "center",
    bannerStyle: "style1",
    font: "Inter",
    weight: "Regular",
    size: 15,
    textAlignment: "left",
    colors: {
      bannerBg: "#23234b",
      bannerBg2: "#0c0c5f",
      title: "#000000",
      body: "#4c4a86",
      btnPrimaryBg: "#000000",
      btnPrimaryText: "#fff",
      btnSecondaryBg: "#e8e8ea",
      btnSecondaryText: "#000000",
    },
    radius: { container: 12, button: 7 },
  };

 const fontWeightMap = {
  Light: 300,
  Regular: 400,
  Medium: 500,
  "Semi Bold": 600,
  Bold: 700,
  "Extra Bold": 800,
  Black: 900,
};

const fontWeight = fontWeightMap[custom.weight] || 400;

  const bannerAlignment =
    custom.bannerAlignment === "center"
      ? "center"
      : custom.bannerAlignment === "left"
      ? "flex-start"
      : "flex-end";

  let positionStyles =
    custom.bannerAlignment === "center"
      ? "left:50%; transform:translateX(-50%);"
      : custom.bannerAlignment === "left"
      ? "left:23px; transform:none;"
      : "right:23px; transform:none;";

  positionStyles =
    custom.bannerStyle === "style5" ? "left:auto;right:0px;" : positionStyles;
  const width =
    custom.bannerStyle === "style1"
      ? 318
      : custom.bannerStyle === "style2"
      ? 318
      : custom.bannerStyle === "style3"
      ? 250
      : custom.bannerStyle === "style4"
      ? 318
      : 448;
  const buttonAlignment =
    custom.bannerStyle === "style4" ? "center" : "flex-end";
  const buttonAlignmentHTMl =
    custom.bannerStyle === "style4" ? "center" : "flex-end";
  const widthHtml =
    custom.bannerStyle === "style1"
      ? "459px"
      : custom.bannerStyle === "style2"
      ? "459px"
      : custom.bannerStyle === "style3"
      ? "370px"
      : custom.bannerStyle === "style4"
      ? "459px"
      : "100%";

  const isAnalyticsChecked =
    checkedCategories.find((item) => item.name === "Analytics")?.checked ||
    false;
  const isMarketing =
    checkedCategories.find((item) => item.name === "Marketing")?.checked ||
    false;
  const isPreferences =
    checkedCategories.find((item) => item.name === "Preferences")?.checked ||
    false;

 
  const isCenter = custom.bannerAlignment === "center";

  const animationMap = {
    fade: isCenter ? "fadeCenterIn" : "fadeIn",
    "slide-up": isCenter ? "slideUpCenter" : "slideUpBottom",
    "slide-down": isCenter ? "slideDownCenter" : "slideDownBottom",
    "slide-left": isCenter ? "slideLeftCenter" : "slideLeftBottom",
    "slide-right": isCenter ? "slideRightCenter" : "slideRightBottom",
  };

  const animationKeyframe =
    animationMap[settings.animation] || (isCenter ? "fadeCenterIn" : "fadeIn");
  const animationStyle = {
    animation: `${animationKeyframe} 0.5s ${settings.easing || "ease"}`,
  };
const prefrenceHtml = `${
    isAnalyticsChecked
      ? `<div>
              <div class="consentbit-prefrence_toggle">
                <p class="consentbit-button-preference">Analytics</p>
                <label
                  id="analytics-checkbox"
                   ${settings.customtoggle ? `customtoggle="true"` : ""}
                  class="w-checkbox consentbit-toggle"
                  ><input
                    type="checkbox"
                    id="checkbox-2"
                    name="checkbox-2"
                    data-name="Checkbox 2"
                    data-consent-id="analytics-checkbox"
                    class="w-checkbox-input" /><span
                    class="w-form-label"
                    for="checkbox-2"
                  ></span
                ></label>
              </div>
              <p class="consentbit-prefrence_text">
                ${
                  finalTranslations[settings.language].sections.analytics
                    .description
                }
              </p>
            </div>`
      : ""
  }
           ${
             isMarketing
               ? `<div>
              <div class="consentbit-prefrence_toggle">
                <p class="consentbit-button-preference">Marketing</p>
                <label
                  id="marketing-checkbox"
                ${settings.customtoggle ? `customtoggle="true"` : ""}
                  class="w-checkbox consentbit-toggle"
                  ><input
                    type="checkbox"
                    id="checkbox-3"
                    name="checkbox-3"
                    data-name="Checkbox 3"
                    data-consent-id="marketing-checkbox"
                    class="w-checkbox-input" /><span
                    class="w-form-label"
                    for="checkbox-3"
                  ></span
                ></label>
              </div>
              <p class="consentbit-prefrence_text">
                ${
                  finalTranslations[settings.language].sections.marketing
                    .description
                }
              </p>
            </div>`
               : ""
           }
           ${
             isPreferences
               ? ` <div>
              <div class="consentbit-prefrence_toggle">
                <p class="consentbit-button-preference">Preferences</p>
                <label
                  id="personalization-checkbox"
                   ${settings.customtoggle ? `customtoggle="true"` : ""}
                  class="w-checkbox consentbit-toggle"
                  ><input
                    type="checkbox"
                    id="checkbox-5"
                    name="checkbox-5"
                    data-name="Checkbox 5"
                    data-consent-id="personalization-checkbox"
                    class="w-checkbox-input" /><span
                    class="w-form-label"
                    for="checkbox-5"
                  ></span
                ></label>
              </div>
              <p class="consentbit-prefrence_text">
               ${
                 finalTranslations[settings.language].sections.preferences
                   .description
               }
              </p>
            </div>`
               : ""
           }`;


  const cookiePreviewHTML = `



<div id="banner-code">

<style>
div#banner-code {
 font-family: ${custom.font};
}
@keyframes slideUpBottom   { from { transform: translateY(100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
@keyframes slideDownBottom { from { transform: translateY(-100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
@keyframes slideLeftBottom { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
@keyframes slideRightBottom{ from { transform: translateX(-100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }

/* ===========================
   Preference Animations (Center Origin)
   =========================== */
@keyframes slideUpCenter   { from { top:50%; left:50%; transform: translate(-50%, 100%);  opacity:0; } to { top:50%; left:50%; transform: translate(-50%, -50%); opacity:1; } }
@keyframes slideDownCenter { from { top:50%; left:50%; transform: translate(-50%, -200%); opacity:0; } to { top:50%; left:50%; transform: translate(-50%, -50%); opacity:1; } }
@keyframes slideLeftCenter { from { top:50%; left:50%; transform: translate(100%, -50%);  opacity:0; } to { top:50%; left:50%; transform: translate(-50%, -50%); opacity:1; } }
@keyframes slideRightCenter{ from { top:50%; left:50%; transform: translate(-200%,-50%);  opacity:0; } to { top:50%; left:50%; transform: translate(-50%, -50%); opacity:1; } }


@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0)    scale(1); }
}

@keyframes fadeInOut {
  0%   { opacity: 0; transform: translateY(10px)  scale(0.8); }
  20%  { opacity: 1; transform: translateY(0)     scale(1); }
  80%  { opacity: 1; transform: translateY(0)     scale(1); }
  100% { opacity: 0; transform: translateY(-10px) scale(0.8); }
}

@keyframes fadeCenterIn {
  from {
    opacity: 0;
    transform: translate(-50%, -50%) translateY(10px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) translateY(0) scale(1);
  }
}
.consentbit-banner-div[data-animation="slide-up"],
.consentbit-ccpa-banner-div[data-animation="slide-up"],
.consentbit-ccpa_banner_div[data-animation="slide-up"],
.consentbit-gdpr-banner-div[data-animation="slide-up"],
.consentbit-gdpr_banner_div[data-animation="slide-up"] {
  animation: slideUpBottom 0.6s ease-out forwards;
}

.consentbit-banner-div[data-animation="slide-down"],
.consentbit-ccpa-banner-div[data-animation="slide-down"],
.consentbit-ccpa_banner_div[data-animation="slide-down"],
.consentbit-gdpr-banner-div[data-animation="slide-down"],
.consentbit-gdpr_banner_div[data-animation="slide-down"] {
  animation: slideDownBottom 0.6s ease-out forwards;
}

.consentbit-banner-div[data-animation="slide-left"],
.consentbit-ccpa-banner-div[data-animation="slide-left"],
.consentbit-ccpa_banner_div[data-animation="slide-left"],
.consentbit-gdpr-banner-div[data-animation="slide-left"],
.consentbit-gdpr_banner_div[data-animation="slide-left"] {
  animation: slideLeftBottom 0.6s ease-out forwards;
}

.consentbit-banner-div[data-animation="slide-right"],
.consentbit-ccpa-banner-div[data-animation="slide-right"],
.consentbit-ccpa_banner_div[data-animation="slide-right"],
.consentbit-gdpr-banner-div[data-animation="slide-right"],
.consentbit-gdpr_banner_div[data-animation="slide-right"] {
  animation: slideRightBottom 0.6s ease-out forwards;
}

/* BANNER FADE (enter) — matches .cookie-banner.fade example */
.consentbit-banner-div[data-animation="fade"],
.consentbit-ccpa-banner-div[data-animation="fade"],
.consentbit-ccpa_banner_div[data-animation="fade"],
.consentbit-gdpr-banner-div[data-animation="fade"],
.consentbit-gdpr_banner_div[data-animation="fade"] {
  opacity: 0;                       /* start transparent */
  will-change: opacity, transform;  /* hint for smoother anim */
  animation: fadeIn 0.5s ease-out forwards;
}

/* OPTIONAL: BANNER FADE-IN-OUT (toast-like) */
.consentbit-banner-div[data-animation="fade-in-out"],
.consentbit-ccpa-banner-div[data-animation="fade-in-out"],
.consentbit-ccpa_banner_div[data-animation="fade-in-out"],
.consentbit-gdpr-banner-div[data-animation="fade-in-out"],
.consentbit-gdpr_banner_div[data-animation="fade-in-out"] {
  opacity: 0;
  will-change: opacity, transform;
  animation: fadeInOut 1.2s ease-in-out forwards;
}

/* ===========================
   Preference assignments
   =========================== */
.consentbit-preference-div[data-animation="slide-up"],
.consentbit-preference_div[data-animation="slide-up"],
.consentbit-ccpa-preference-div[data-animation="slide-up"],
.consentbit-ccpa_preference[data-animation="slide-up"] {
  animation: slideUpCenter 0.6s ease-out forwards;
}

.consentbit-preference-div[data-animation="slide-down"],
.consentbit-preference_div[data-animation="slide-down"],
.consentbit-ccpa-preference-div[data-animation="slide-down"],
.consentbit-ccpa_preference[data-animation="slide-down"] {
  animation: slideDownCenter 0.6s ease-out forwards;
}

.consentbit-preference-div[data-animation="slide-left"],
.consentbit-preference_div[data-animation="slide-left"],
.consentbit-ccpa-preference-div[data-animation="slide-left"],
.consentbit-ccpa_preference[data-animation="slide-left"] {
  animation: slideLeftCenter 0.6s ease-out forwards;
}

.consentbit-preference-div[data-animation="slide-right"],
.consentbit-preference_div[data-animation="slide-right"],
.consentbit-ccpa-preference-div[data-animation="slide-right"],
.consentbit-ccpa_preference[data-animation="slide-right"] {
  animation: slideRightCenter 0.6s ease-out forwards;
}

/* Smooth fade-in for centered preference modal */
.consentbit-preference-div[data-animation="fade"],
.consentbit-preference_div[data-animation="fade"],
.consentbit-ccpa-preference-div[data-animation="fade"],
.consentbit-ccpa_preference[data-animation="fade"] {
  opacity: 0;
  will-change: opacity, transform;
  animation: fadeCenterIn 0.5s ease-out forwards;
}




  .consentbit-gdpr_banner_div {
    z-index: 99999;
    transform-style: preserve-3d;
    background-color: ${custom.colors.bannerBg};
    border-radius: ${custom.radius.container}px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${widthHtml};
    
    padding: 20px;
    font-family: ${custom.font};
    display: none;
    position: fixed;
    bottom: ${custom.bannerStyle === "style5" ? "0" : "6%"};
    left: auto;
    right: ${custom.bannerStyle === "style5" ? "0" : "3%"};
    transform: translate3d(0, 0, 0);
    box-shadow: 2px 2px 20px #00000082;
   ${positionStyles}
  }

  .consentbit-gdpr_banner_text {
    color: #4c4a66;
    font-size: 16px;
    line-height: 1.5;
    font-weight: Regular;
    text-align: left;
    width: 100%;
    margin: 0 0 10px;
    display: block;
  }

  .consentbit-banner_button_container {
    justify-content: right;
    width: 100%;
    margin-top: 10px;
    display: flex;
  }

  .consentbit-banner_button_preference, .consentbit-banner_button_decline {
    color: #000;
    text-align: center;
    cursor: pointer;
    background-color: #c9c9c9;
    border-radius: 3px;
    justify-content: center;
    min-width: 80px;
    margin-left: 5px;
    margin-right: 5px;
    font-family: Montserrat, sans-serif;
    display: flex;
  }

  .consentbit-banner_accept {
    color: #fff;
    text-align: center;
    cursor: pointer;
    background-color: #000;
    border-radius: 3px;
    justify-content: center;
    min-width: 80px;
    margin-left: 5px;
    margin-right: 5px;
    font-family: Montserrat, sans-serif;
    display: flex;
  }

  .consentbit-banner_headings {
    color: #000;
    font-size: 20px;
    font-weight: Regular;
    text-align: left;
    width: 100%;
    margin-top: 0;
    margin-bottom: 10px;
  }

  .consentbit-innerdiv {
    max-width: 877px;
    margin-left: auto;
    margin-right: auto;
  }

  .consentbit-banner_second-bg {
    z-index: -3;
    opacity: .3;
    background-color: ${custom.colors.bannerBg2};
    border-top-right-radius: ${custom.radius.container}px;
    border-bottom-right-radius:  ${custom.radius.container}px;
    width: 35%;
    height: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .close-consent {
    z-index: 99;
    color: #000;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    font-family: Montserrat, sans-serif;
    display: flex;
    position: absolute;
    top: 5%;
    left: auto;
    right: 2%;
  }

  .consentbit-preference_div {
    z-index: 99999;
    background-color: ${custom.colors.bannerBg};
    border-radius: ${custom.radius.container}px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 435px;
    max-height: 510px;
    padding: 20px;
    font-family: ${custom.font};
    position: relative;
    top: 50%;
    left: 50%;
    overflow-y: scroll;
    transform: translate(-50%, -50%);
    box-shadow: 2px 2px 20px #00000082;
  }

  .consentbit-prefrence_text {
    color: ${custom.colors.body};
    text-align: left;
    width: 100%;
    max-width: 400px;
    margin: 0 0 10px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    display: block;
  }

  .consentbit-formblock {
    background-color: #fff;
    border-radius: 8px;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    display: flex;
  }

  .consentbit-prefrence_block {
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
    display: flex;
  }

  .consentbit-prefrence_toggle {
    color: #10d68a00;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;
    display: flex;
  }

  .consentbit-prefrence-container {
    justify-content: right;
    width: 100%;
    margin-top: 10px;
    display: flex;
  }

  .consentbit-button-preference {
    color: #483999;
    font-size: 18px;
    font-weight: 500;
  }
.consentbit-prefrence-container a {
    text-decoration: none;
     cursor: pointer;
}
  .consentbit-checkbox-label {
    color: #000;
    text-align: center;
    cursor: pointer;
    background-color: #c9c9c9;
    border-radius: 3px;
    justify-content: center;
    min-width: 80px;
    margin-left: 5px;
    margin-right: 5px;
    display: flex;
  }

  .consebit-prefrence-accept {
    color: #fff;
    text-align: center;
    cursor: pointer;
    background-color: #000;
    border-radius: 3px;
    justify-content: center;
    min-width: 80px;
    margin-left: 5px;
    margin-right: 5px;
    display: flex;
  }

  .consentbit-prefrence-decline {
    color: ${custom.colors.btnSecondaryText};
    text-align: center;
    cursor: pointer;
    background-color: ${custom.colors.btnPrimaryBg};
    border-radius: ${custom.radius.button}px;
    justify-content: center;
    min-width: 80px;
    margin-left: 5px;
    margin-right: 5px;
    display: flex;
  }

  .consebit-prefrence-heading {
    color: #000;
    text-align: left;
    width: 100%;
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 500;
  }

  .consentbit-toggle {
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
    background-color: transparent;
    border-radius: 4px;
    width: 20px;
    height: 20px;
    display: inline-block;
    position: relative;
  }

  .consentbit-change-preference {
    z-index: 999;
    cursor: pointer;
    background-image: url("https://cdn.prod.website-files.com/63d5330e6841081487be0bd6/67ebf5ee639d12979361f2bc_consent.png");
    background-position: 50%;
    background-size: cover;
    border-radius: 50%;
    width: 55px;
    height: 55px;
    position: fixed;
    bottom: 3%;
    left: 2%;
  }

  .consentbit-close {
    z-index: 99;
    color: #000;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    font-family: Montserrat, sans-serif;
    display: flex;
    position: absolute;
    top: 5%;
    left: auto;
    right: 10px;
  }

  .consentbit-preference {
    z-index: 99999;
    display: none;
    position: fixed;
    inset: 0%;
  }

  .consentbit-ccpa-banner-div {
    z-index: 99999;
    transform-style: preserve-3d;
    background-color: ${custom.colors.bannerBg};
    border-radius: ${custom.radius.container}px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${widthHtml};
    
    padding: 20px;
    font-family: ${custom.font};
    display: none;
    position: fixed;
    bottom: ${custom.bannerStyle === "style5" ? "0" : "3%"};
    left: auto;
    right: 3%;
    transform: translate3d(0, 0, 0);
    box-shadow: 2px 2px 20px #00000082;
  }

  .consentbit-ccpa-banner-text {
    color: #4c4a66;
    font-size: 16px;
    line-height: 1.5;
    font-weight: Regular;
    text-align: left;
    width: 100%;
    margin: 0 0 10px;
    display: block;
  }

  .consentbit-ccpa-button-container {
    justify-content: left;
    width: 100%;
    margin-top: 10px;
    display: flex;
  }

  .consentbit-ccpa-banner-heading {
    color: #000;
    font-size: 20px;
    font-weight: Regular;
    text-align: left;
    width: 100%;
    margin-top: 0;
    margin-bottom: 10px;
  }

  .consentbit-ccpa-linkblock {
    color: #483999;
    cursor: pointer;

    border-radius: 48px;
    min-width: 80px;
    margin-left: 5px;
    margin-right: 5px;
  }

  .consentbit-ccpa-innerdiv {
    max-width: 877px;
    margin-left: auto;
    margin-right: auto;
  }

  .consentbit-banner-ccpasecond-bg {
    z-index: -3;
    opacity: .3;
    background-color: #798eff;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    width: 35%;
    height: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .close-consentbit {
    z-index: 99;
    color: #000;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    font-family: Montserrat, sans-serif;
    display: flex;
    position: absolute;
    top: 5%;
    left: auto;
    right: 2%;
  }

  .consentbit-ccpa_preference {
    z-index: 99999;
   border-radius:${custom.radius.container}px;
  	background-color:${custom.colors.bannerBg};
  	color:${custom.colors.body};
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    font-family: Montserrat, sans-serif;
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    overflow-y: scroll;
    transform: translate(-50%, -50%);
    box-shadow: 2px 2px 20px #00000082;
  }

  .consentbit-ccpa_prefrence_text {
    color:${custom.colors.body};
    text-align: left;
    width: 100%;
    max-width: 400px;
    margin: 0 0 10px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    display: block;
  }

  .consentbit-ccpa-formblock {
    background-color: #fff;
    border-radius: 8px;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    display: flex;
  }

  .consentbit-ccpa-prefrence-block {
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
    display: flex;
  }

  .consentbit-ccpa-prefrence-toggle {
    direction: rtl;
    color: #483999;
    flex-flow: row;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;
    display: flex;
  }

  .consebit-ccpa-prefrence-container {
    justify-content: right;
    width: 100%;
    margin-top: 10px;
    display: flex;
  }
.cookie-btn-row button {
    cursor: pointer;
}
  .consentbit-ccpa-button-preference {
    color: #000;
    text-align: center;
    cursor: pointer;
    background-color: #c9c9c9;
    border-radius: 3px;
    justify-content: center;
    min-width: 80px;
    margin-left: 5px;
    margin-right: 5px;
    display: flex;
  	padding: 9px 15px;
  }

  .consebit-ccpa-prefrence-accept {
    color: ${custom.colors.btnPrimaryText};
    text-align: center;
    cursor: pointer;
    background-color: ${custom.colors.btnPrimaryBg};
    border-radius: ${custom.radius.button}px;
    justify-content: center;
    min-width: 80px;
    margin-left: 5px;
  	padding: 9px 15px;
    margin-right: 5px;
    display: flex;
  }

  .consebit-ccpa-prefrence-decline {
    padding: 9px 15px;
    color: ${custom.colors.btnSecondaryText};
    text-align: center;
    cursor: pointer;
    background-color:  ${custom.colors.btnSecondaryBg};
    border-radius: ${custom.radius.button}px;
    justify-content: center;
    min-width: 80px;
    margin-left: 5px;
    margin-right: 5px;
    display: flex;
  }

  .consebit-ccpa-prefrence-heading {
    color: #000;
    text-align: left;
    width: 100%;
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 500;
  }
[customtoggle="true"]{
    position: relative;
    display: inline-block;
    width: 49px;
    height: 24px;
}
  .consent-close {
    z-index: 99;
    color: #000;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    font-family: Montserrat, sans-serif;
    display: flex;
    position: absolute;
    top: 10px;
    left: auto;
    right: 0;
  }

  .div-block {
    display: none;
  }


  .consentbit-prefrence-decline
   {
  	color: #000;
  	text-align: center;
  	cursor: pointer;
  	background-color: #c9c9c9;
  	border-radius: 3px;
  	justify-content: center;
  	min-width: 80px;
  	margin-left: 5px;
  	margin-right: 5px;
  	display: flex
  ;
  padding: 9px 15px;
  }
  .consebit-ccpa-prefrence-container a {
    text-decoration: none;
    cursor: pointer;
}
  .consebit-prefrence-accept {
  	color: ${custom.colors.btnPrimaryText};
  	text-align: center;
  	cursor: pointer;
  	background-color: ${custom.colors.btnPrimaryBg};
  	border-radius: ${custom.radius.button}px;
  	justify-content: center;
  	min-width: 80px;
  	margin-left: 5px;
  	margin-right: 5px;
  	display: flex;
  	padding: 9px 15px;

  }
  @media screen and (max-width: 991px) {
    .consentbit-preference_div, .consentbit-ccpa_preference {
  	width: 100%;
  	max-width: 23.5rem;
    }
  }

  @media screen and (max-width: 767px) {
    .consentbit-gdpr_banner_div {
  	width: 100%;
  	max-width: 100%;
  	inset: auto 0 0;
  	transform: none;
    }

    .consentbit-banner_button_container {
  	text-align: center;
  	flex-direction: column;
  	justify-content: center;
  	row-gap: 12px;
  	margin-bottom: 10px;
  	display: flex;
    }

    .consentbit-ccpa-banner-div {
  	width: 100%;
  	max-width: 100%;
  	inset: auto 0 0;
  	transform: none;
    }
  }
</style>

<span style="font-family:${custom.font}; position:absolute; opacity:0; left:-9999px;">font-preload</span>
<div
id="consent-banner"
  class="cookie-preview  consentbit-gdpr-banner-div hidden consentbit-gdpr_banner_div"
  ${settings.disableScroll ? "data-cookie-banner= true" : ""}
 data-animation="${settings.animation.toLowerCase()}"
  style=" position:fixed;  z-index:9999999;${positionStyles}"
>
 ${
   settings.showCloseButton
     ? `<p consentbit="close" class="close-consent">X</p>`
     : ""
 }
  <div
    class="cookie-preview-popup consentbit-innerdiv"
    style="
		text-align:${custom.textAlignment};

		width: 100%;
	
		font-weight:${fontWeight};
		font-size:${custom.size}px;
		border-radius:${custom.radius.container}px;
		
		color:${custom.colors.body}; 
		
		
	  "
  >
    ${
      custom.bannerStyle === "style2"
        ? `<div class="consentbit-banner_second-bg"></div>`
        : ""
    }
    <div
      class="cookie-title"
      style="color:${custom.colors.title};font-weight:600;margin-bottom:16px;"
    >
      ${translations[settings.language].heading}
    </div>
    <div class="cookie-desc">
      ${translations[settings.language].description}  ${
    settings.privacyUrl.length > 0
      ? `<a href="${settings.privacyUrl}" target="_blank">${
          moreInfoTranslations[settings.language]
        }</a>`
      : ""
  }
    </div>
    <div
      class="cookie-btn-row"
      style="margin-top:16px; display:flex;gap:8px;justify-content:${buttonAlignment};"
    >
      <button
       id="preferences-btn"
        class="cookie-pref-btn"
        style="font-size:${custom.size}px;padding:7px 14px;border:none;color:${
    custom.colors.btnSecondaryText
  };background-color:${custom.colors.btnSecondaryBg};border-radius:${
    custom.radius.button
  }px;"
      >
        ${translations[settings.language].preferences}
      </button>
      <button
      id="decline-btn"
        class="cookie-reject-btn"
        style="font-size:${custom.size}px;padding:7px 14px;border:none;color:${
    custom.colors.btnSecondaryText
  };background-color:${custom.colors.btnSecondaryBg};border-radius:${
    custom.radius.button
  }px;"
      >
         ${translations[settings.language].reject}
      </button>
      <button
       id="accept-btn"
        class="cookie-accept-btn"
        style="font-size:${custom.size}px;padding:7px 14px;border:none;color:${
    custom.colors.btnPrimaryText
  };background-color:${custom.colors.btnPrimaryBg};border-radius:${
    custom.radius.button
  }px;"
      >
         ${translations[settings.language].accept}
      </button>
    </div>
  </div>
</div>

${
  compliance.length === 1 && compliance.includes("gdpr")
    ? ""
    : `<div
  class="cookie-preview-CCPA-banner hidden consentbit-ccpa-banner-div"
  data-animation="${settings.animation}"
    ${settings.disableScroll ? "data-cookie-banner= true" : ""}
  id="initial-consent-banner"
  style=" position:fixed;  z-index:99999;${positionStyles}"
>
   ${
     settings.showCloseButton
       ? `<p consentbit="close" class="close-consent">X</p>`
       : ""
   }
  <div
    class="cookie-preview-popup consentbit-innerdiv"
    style="
		text-align:${custom.textAlignment};
		max-width:${widthHtml};
		width: 100%;
		
		font-weight:${fontWeight};
		font-size:${custom.size}px;
		border-radius:${custom.radius.container}px;
		
		color:${custom.colors.body}; 
		
		
	  "
  >
        ${
          custom.bannerStyle === "style2"
            ? `<div class="consentbit-banner_second-bg"></div>`
            : ""
        }

    
    <div
      class="cookie-title"
      style="color:${custom.colors.title};font-weight:600;margin-bottom:16px;"
    >
    ${translations[settings.language].ccpa.heading}
    </div>
    <div class="cookie-desc">
     ${translations[settings.language].ccpa.description} ${
        settings.privacyUrl.length > 0
          ? `<a href="${settings.privacyUrl}" target="_blank">${
              moreInfoTranslations[settings.language]
            }</a>`
          : ""
      }
    </div>
    <div
      class="cookie-btn-row"
      style="margin-top:16px; display:flex;gap:8px;justify-content:${buttonAlignment};"
    >
      <a id="do-not-share-link" class="consentbit-ccpa-linkblock w-inline-block"
        >  ${translations[settings.language].ccpa.doNotShare}</a
      >
    </div>
  </div>
</div>
          `
}
<!-- Preference Panel -->
<div id="main-banner" ${settings.disableScroll ? `data-cookie-banner= "true"` : ""} class="consentbit-preference hidden">
  <div

  ${settings.disableScroll ? `data-cookie-banner= "true"` : ""}
    data-animation="${settings.animation}"
    class="consentbit-preference_div hidden"
  >
    <h4 class="consebit-prefrence-heading">${
      finalTranslations[settings.language].heading
    }</h4>
    <p class="consentbit-prefrence_text">
     ${finalTranslations[settings.language].description}  ${
    settings.privacyUrl.length > 0
      ? `<a href="${settings.privacyUrl}" target="_blank">${
          moreInfoTranslations[settings.language]
        }</a>`
      : ""
  }
    </p>
    <div id="consentbit-preference_div" class="consentbit-prefrence_block">
      <div class="consentbit-prefrence_block">
        <div class="w-form">
          <form
            id="email-form"
            name="email-form"
            data-name="Email Form"
            method="get"
            data-wf-page-id="68adcbabbd0941faf8b0f6e3"
            data-wf-element-id="662bb4bb-38c2-4633-ba3c-94853af51a03"
            data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e"
            aria-label="Email Form"
          >

         
            <div>
              <div class="consentbit-prefrence_toggle">
                <p class="consentbit-button-preference">Essential</p>
                <label
                  id="necessary-checkbox"
                  ${settings.customtoggle ? `customtoggle="true"` : ""}
                  class="w-checkbox consentbit-toggle"
                  ><input
                    type="checkbox"
                    id="checkbox"
                    name="checkbox"
                    data-name="Checkbox"
                    data-consent-id="necessary-checkbox"
                    class="w-checkbox-input"
                    disabled="" /><span
                    class="w-form-label"
                    for="checkbox"
                  ></span
                ></label>
              </div>
              <p class="consentbit-prefrence_text">
               ${
                 finalTranslations[settings.language].sections.essential
                   .description
               }
              </p>
            </div>
            ${prefrenceHtml}
            <div>
              <div>
                <input
                  type="hidden"
                  name="cf-turnstile-response"
                  id="cf-chl-widget-qnkn0_response"
                  value="0.a14CwqWmLpN69rTD813XVPvK0qUIZuVZ-48ikJ9o_qxsh3jLLSz7gY9tCiTGjflto4qES2CASPAzx36SpRXMitCaAUJ0i4TKguiH8vRtcLGX8KVJ_D-F_RM0hgd3i_IuUdYVGnXZgpkm8y1rBasg3k7Fl7g8g_spqxfLoq7dt72QaBVHDJUwGzgzOdvNdzhP0a2Dfx4hR6-n_twx_BiZXMWH85xB5unXAJ8mvHX1y-ABT8x1AeXSlRUwuU5jTZwJRQA8k2RYxxJSiuq8Yg8FwoTwP54rOXEImOU0oRWbeVibwRvEYGhA-xgFv--BRqnKUtN_jipmXGJKguMahxsDnMzCqSlvnb1ockIfxu5CAl8XX9HKe5QK2fo4kWD6nAuoQnZ744RNdJ3zQg691eC5Rg7Kw09x4YCVq-USLlK9ebb4tts-JiDX1M_hk_n6Yjw8b4MECJF19OV_U2d43Fpjd6D10KsEwJJvnATXG4PRK3HLype2WmQ3VHXz45IWPDr_K5jDVYUsbRf-up8daMm93Im1l4FR2eKunPomgfBASU3DsoNQseN8K5eK7FHUUc85hnInbkTFy21LrD9BbspRKHazKKS5X_cPaSAPN2DCgmGJBuEOeINWeeAcDLtTGG_orHI19CBKoGVgS2cRa-5HNEiSVINly_PGvHG-oCQA-NHB7KPKwFlaNvxRx46A0SeC7wxSaprpT3ktZqjEUxEfqkzYh5Lhq5l301GyihkktVwUCYcVRGy_S5_wUSYyPR-qeEogqjNFUzPGeyYIWJ4wQ0yPqC5IOdgIRbrWttVmDSQaj4DuHIYTgxuPQ5kgu32LkRcGKB7jUf2G73kILCWqt-U1KpFyKo6i4vehn0NUjmr6TCtxl6V_tTjPWIGUMbBFYC2m-xOQG4FdlL6zi0h6cdE44AO_xnai6S8JMJ9wjk0yjtx1BNUzE9I9PQwamrA10YFCQSI5d91CE_hGOG0L0K1gCIRt3Od1Oohbf4hENXY2Prt_4pJKlGDXxzJkuC3p.Pmv2JAeG_BD4T9j1wnDBPw.0d34d4f3562d80d32333e61203bf9c3e4cb428c0984507551c5cbba7af2a6f49"
                />
              </div>
            </div>
          </form>
        
        </div>
      </div>
    </div>
    <div class="consentbit-prefrence-container">
      <a
        id="save-preferences-btn"
        href="#"
        class="consebit-prefrence-accept w-button"
        >   ${finalTranslations[settings.language].acceptAll}</a
      ><a id="cancel-btn" href="#" class="consentbit-prefrence-decline w-button"
        >               ${finalTranslations[settings.language].reject}
</a
      >
    </div>
    ${
      settings.showCloseButton
        ? `<p consentbit="close" class="consentbit-close">X</p>`
        : ""
    }
  </div>
</div>

${
  compliance.length === 1 && compliance.includes("gdpr")
    ? ""
    : `<div
  id="main-consent-banner"
  data-animation="${settings.animation}"
   ${settings.disableScroll ? "data-cookie-banner= true" : ""}
  class="consentbit-ccpa_preference hidden"
  style="visibility: visible !important; opacity: 1 !important"
>
  <h4 class="consebit-ccpa-prefrence-heading">${
    ccpaTranslations[settings.language]?.heading || "CCPA Preferences"
  }</h4>
  <p class="consentbit-ccpa_prefrence_text">
    ${ccpaTranslations[settings.language]?.description}  ${
        settings.privacyUrl.length > 0
          ? `<a href="${settings.privacyUrl}" target="_blank">${
              moreInfoTranslations[settings.language]
            }</a>`
          : ""
      }
  </p>
  <div class="consentbit-ccpa-prefrence-block">
    <div class="consentbit-ccpa-prefrence-block">
      <div class="w-form">
        <form
          id="email-form-2"
          name="email-form-2"
          data-name="Email Form 2"
          method="get"
          data-wf-page-id="68adcbabbd0941faf8b0f6e3"
          data-wf-element-id="7030da06-8426-da3e-f39d-32e7c521fafd"
          data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e"
          aria-label="Email Form 2"
        >
          <div class="consentbit-ccpa-prefrence-toggle">
            <p class="consentbit-ccpa_prefrence_text">
              ${ccpaTranslations[settings.language]?.doNotShare}
            </p>
            <label
              id="do-not-share-checkbox"
              class="w-checkbox consentbit-toggle"
              ><input
                type="checkbox"
                id="checkbox-4"
                name="checkbox-4"
                data-name="Checkbox 4"
                data-consent-id="do-not-share-checkbox"
                class="w-checkbox-input" /><span
                class="w-form-label"
                for="checkbox-4"
              ></span
            ></label>
          </div>
          <div>
            <div>
              <input
                type="hidden"
                name="cf-turnstile-response"
                id="cf-chl-widget-0o4xi_response"
                value="0.V_8gszRqeGk1-ht5eYtUjq6rKSmITfnuGoM51eBszGdNoT5APYq9LNeKRL4ZzD5ju-1PlvX5Vb9M7K9hyERJj9ABRsuu_jxoyAaIuc8Uc55EobcEm36rZnLcDzurAxx11tC_D4FWa1_J_fN5kgaQ0DTHdbVrvesVyfIwk7GsxDFMgngresvZfQmseTfNgUq22FgbKduu_nWORmNhUJ4rgrzvhqGzxu9jm3BP8qP0PeeilnVuThkiIB9BB9BBlNAwFX-zhx8_rIbThw7kHZCbWltu21JR-_5gQ5uXhdP2EXsZBssWbbK_QgFegYdF-kXLzzt-WnK99pJa7iQXavbvlZnLF_FxQocq_pjq1ZE9bc6tnJO4bY2TD7LTow4QCwaemzjKJserOGxUty7IpX6QcUl1tDzdDhQYRw2FRe8GTV9V5_wpcsQcSceLZuyPKqpwm2oQ3VZiqhfYwNMTgV3dIljTIMRFckC29AB3AL-ejkwrF2Ys6TmAQvxbSY6uVHYyYxh4Cbbc2_Y2kRetvm-Y3xRvi0aPfLQtkujaDbZspavh6QbPqxydE3T9kShy91NWCStXm-HfL6ju8INcsiKpagTaKv0ypq9mga2Z8xhcCAjIK-pZfpu2osVeWsMNeDRrzVhStQ3TLGSldtVoC7MMWpalTODNinCg45W7B2rDfQxkz-nI3jgK-rFXT8B_YbsRxVW57nnWf_pQd0i_fsmXmsengubaru_A8EM3nIVieK6kjtzXDCyJSF5-uZsSXTvTtsxpm6s_BiatTCd4q7GPe-Mk-kgLgeSN72uUc0MLs_WlMYeKi-g7SmD2Y1BPt0tm8SSRt10O9Iv7zpc42sCOcH3ahOyzDND4nEwZEuE3xfU1PS7u6N7UVgq2jB2NVk_d1UtReGExox_Oc-8alVkP9doNCvfcyhexmiaw-0pnEo9zqtoi8WNK5-RL0dcbWSw19zrykQTQqSg9CO8oyiTU0sF8aOH-Aj7Rbl1x8FqcvDU.deBXwvou6-uz-_VPirGS5w.10ecc4776b37fa6cb843c4811c9c22a71ed877121d5fd03980db6bc754783c97"
              />
            </div>
          </div>
        </form>
       
       
      </div>
    </div>
  </div>
  <div class="consebit-ccpa-prefrence-container">
    <a id="save-btn" href="#" class="consebit-ccpa-prefrence-accept w-button"
      > ${ccpaTranslations[settings.language]?.savePreference}</a
    ><a
      id="close-consent-banner"
      href="#"
      class="consebit-ccpa-prefrence-decline w-button"
      > ${ccpaTranslations[settings.language]?.cancel}</a
    >
  </div>
  <p consentbit="close" class="consent-close">X</p>
</div>`
}
<div id="consensite-id" style="display:none">${siteId}</div>
<div id="consensite-banner-type" style="display:none">${
    compliance.length === 1 && compliance.includes("gdpr") ? "gdpr" : "ccpa"
  }</div>
<div id="toggle-consent-btn" scroll-control="true" class="consentbit-change-preference"></div>

<div>
`;
 document.body.insertAdjacentHTML('beforeend', cookiePreviewHTML);
