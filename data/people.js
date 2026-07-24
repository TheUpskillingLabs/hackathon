/* ════════════════════════════════════════════════════════════════════════
   MENTORS & JUDGES — data for the "Who's in the Room" grid.

   Pull from the mentor/judge outreach tracker as people confirm. Until the
   list is set, this file holds placeholder cards so the layout is visible.

   TO PUBLISH THE REAL LIST:
     1. Add one object per confirmed person.
     2. Delete `placeholder: true` from every real entry (that flag draws the
        dashed "to be confirmed" treatment).
     3. Set  PEOPLE_PENDING = false  so the "confirming" banner disappears.

   Each entry:
     name  — full name
     tag   — one-line role / expertise
     role  — 'Mentor' or 'Judge' (drives the badge)
     photo — optional path to a headshot in assets/ (e.g. 'assets/jane-doe.jpg');
             omit or leave '' to show a monogram avatar instead
     placeholder — remove once the entry holds real, confirmed content
   ════════════════════════════════════════════════════════════════════════ */

const PEOPLE_PENDING = true;

const PEOPLE = [
  { name: '[NAME]', tag: '[ONE-LINE ROLE / EXPERTISE TAG]', role: 'Mentor', photo: '', placeholder: true },
  { name: '[NAME]', tag: '[ONE-LINE ROLE / EXPERTISE TAG]', role: 'Mentor', photo: '', placeholder: true },
  { name: '[NAME]', tag: '[ONE-LINE ROLE / EXPERTISE TAG]', role: 'Judge', photo: '', placeholder: true },
  { name: '[NAME]', tag: '[ONE-LINE ROLE / EXPERTISE TAG]', role: 'Judge', photo: '', placeholder: true },
];
