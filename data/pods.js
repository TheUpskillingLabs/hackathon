/* ════════════════════════════════════════════════════════════════════════
   THIS CYCLE'S PODS — data for the "What This Cycle's Teams Are Building" grid.

   The final pod list comes out of the Sensemaking Sprint vote, roughly two
   weeks before Build Day. Until then this file holds placeholder cards so the
   layout is visible.

   TO PUBLISH THE REAL LIST:
     1. Pull the final pods + one-line problem statements from the Sprint
        vote output.
     2. Replace the entries below (one object per pod).
     3. Delete `placeholder: true` from every entry (that flag is what draws
        the dashed "to be confirmed" treatment).
     4. Set  PODS_PENDING = false  so the "finalizing" banner disappears.

   Each entry:
     name     — pod name
     problem  — one-line problem statement
     builders — team size (a number)
     placeholder — remove once the entry holds real, confirmed content
   ════════════════════════════════════════════════════════════════════════ */

const PODS_PENDING = true;

const PODS = [
  { name: '[POD NAME]', problem: '[ONE-LINE PROBLEM STATEMENT]', builders: null, placeholder: true },
  { name: '[POD NAME]', problem: '[ONE-LINE PROBLEM STATEMENT]', builders: null, placeholder: true },
  { name: '[POD NAME]', problem: '[ONE-LINE PROBLEM STATEMENT]', builders: null, placeholder: true },
];
