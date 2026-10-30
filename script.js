 // Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// =====================================================
// B1: DARK MODE TOGGLE
// =====================================================
const darkModeToggle = document.getElementById("darkModeToggle");

function updateThemeButton() {
    const isDark = document.documentElement.classList.contains("dark");

    darkModeToggle.textContent = isDark ? "Light" : "Dark";
    darkModeToggle.setAttribute("aria-pressed", String(isDark));
}

darkModeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    updateThemeButton();
});

updateThemeButton();


// =====================================================
// CONTACT FORM
// =====================================================
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    formStatus.textContent =
        "Thank you! This demo form does not send messages.";

    contactForm.reset();
});


// =====================================================
// D1 + D2: PAGE-LOAD INTRO TIMELINE
// =====================================================
const progressBar = document.getElementById("progressBar");
let introTimeline = null;

// Check whether the visitor prefers reduced motion.
const motionSettings = gsap.matchMedia();

motionSettings.add(
    "(prefers-reduced-motion: no-preference)",
    () => {

        // power2.out makes the entrance animation finish smoothly.
        introTimeline = gsap.timeline({
            paused: true,
            defaults: {
                duration: 0.6,
                ease: "power2.out"
            }
        });

        introTimeline
            .from("#heroContent h1", {
                y: 30,
                opacity: 0
            })

            .from("#heroContent > p", {
                y: 20,
                opacity: 0
            }, "-=0.3")

            .from("#heroContent a, #replayBtn", {
                y: 15,
                opacity: 0,
                stagger: 0.2
            }, "-=0.2")

            .from("#heroImage", {
                scale: 0.8,
                opacity: 0
            }, "<");

        // Start the intro animation.
        introTimeline.play();


        // =====================================================
        // E1: SCROLL REVEALS
        // =====================================================
        gsap.utils.toArray(".reveal").forEach((section) => {
            gsap.from(section, {
                y: 30,
                opacity: 0,
                duration: 0.7,

                scrollTrigger: {
                    trigger: section,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });
        });


        // =====================================================
        // E2: SCROLL PROGRESS BAR
        // =====================================================
        // ease: none keeps the bar synchronized with scrolling.
        gsap.to(progressBar, {
            width: "100%",
            ease: "none",

            scrollTrigger: {
                trigger: document.documentElement,
                start: "top top",
                end: "bottom bottom",
                scrub: true,

                onUpdate: (self) => {
                    progressBar.setAttribute(
                        "aria-valuenow",
                        String(Math.round(self.progress * 100))
                    );
                }
            }
        });


        // =====================================================
        // E3: CLEANUP
        // =====================================================
        // Reset the progress bar when this motion setup is removed.
        return () => {
            introTimeline = null;
            progressBar.style.width = "0%";
            progressBar.setAttribute("aria-valuenow", "0");
        };
    }
);


// =====================================================
// D3: REPLAY INTRO BUTTON
// =====================================================
document.getElementById("replayBtn").addEventListener("click", () => {
    if (introTimeline) {
        introTimeline.restart();
    }
});