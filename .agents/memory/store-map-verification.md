---
name: Store map verification
description: Confidence boundaries for store directions and historical location pages.
---
Treat user-supplied Google Maps address-search URLs as searches, not verified business pins. Label an approximate square/area explicitly.

**Why:** Earlier map links were reported wrong; the replacement links supplied by the user included searches rather than exact listing links.

**How to apply:** Do not claim an exact destination without verification. Keep historical location URLs working when adjusting current branch data rather than deleting indexed routes as a side effect.