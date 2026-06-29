# Studio Mock-Up — IBSC Recertification Redesign

Concept mockups for an improved FOAMfrat IBSC recertification experience. These are
interactive HTML prototypes (no backend) styled to match the FOAMfrat CE platform.

## Background

IBSC (International Board of Specialty Certification) credentials such as the Flight
Paramedic (FP-C) and Critical Care Paramedic (CCP-C) renew every four years by
submitting 100 hours of continuing education, part of which must come from an approved
IBSC review course. FOAMfrat offers an approved **40-hour** and **100-hour** renewal
package, built by mapping existing FOAMfrat courses onto the required IBSC topics.

These mockups reorganize that experience around the **official IBSC FP-C Detailed
Content Outline domains**, so each learning path corresponds to an auditable
requirement area instead of a flat course list.

## Files

| File | What it is |
|------|------------|
| `index.html` / `ibsc-learning-paths.html` | Student-facing learning-paths interface. Toggles between the IBSC 40-hour and 100-hour tracks. Courses are grouped into the 10 official FP-C content-outline domains, with progress, hours earned, clinical/operational tagging, and domain-coverage tracking. |
| `ibsc-renewal-versioning.html` | Concept for catalog versioning / cohort-locking — how new courses can be added without disturbing students who are already mid-renewal. |

### The 10 IBSC FP-C content-outline domains

Safety & Transport · Flight Physiology · Airway, Anesthesia & Analgesics ·
Medical Emergencies · Neurological · Cardiac · Trauma & Burns ·
Maternal, Fetal & Neonatal · Pediatric · Professional Considerations

## Live demo

- **Student interface:** https://tylerchristifulli.github.io/Studio-Mock-Up/
- **Versioning concept:** https://tylerchristifulli.github.io/Studio-Mock-Up/ibsc-renewal-versioning.html

## Notes

- The course-to-domain mapping is a first-pass draft and should get clinical sign-off.
- Progress figures mirror the live IBSC progress page at the time of capture
  (40-hour: 21/40 hrs; 100-hour: 30.5/100 hrs).
- These are design mockups only — not production code.
