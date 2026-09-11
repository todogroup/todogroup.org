# 2027 Steering Committee application

The application lives at `/community/2027-steering-committee-application/`.
The nominations article links to it. Its native HTML POST is handled by Netlify
Forms; no Google account, JavaScript framework, or custom API is needed.

Form name: `steering-committee-2027`.

## Before merging / opening applications

1. Open the TODO project in Netlify, then **Forms → Enable form detection**.
   If detection is already enabled, leave it enabled.
2. Check the project's **Forms → Usage and configuration** and plan allowance.
3. Deploy the branch again after enabling detection. Confirm that
   `steering-committee-2027` appears in Forms.
4. Make one clearly labelled QA submission on the deployed preview, then confirm
   its fields appear in Forms (check spam if necessary). The success page alone
   is not proof that a submission was stored. Local `hugo server` / an HTTP file
   server cannot process Netlify submissions.
5. Confirm that the project manager's Netlify account can view submissions.
6. Merge only after response collection has been verified. The Google Form link
   on the production article stays unchanged until this PR is merged.

The form includes a hidden honeypot; Netlify also applies its spam filtering.
Client-side required/email/URL checks and the 300-word bio limit help candidates
complete the form, but are not server-side validation. Review incoming responses.

## Reviewing and sharing responses

Open **Forms → steering-committee-2027** to review submissions. Use **Download as
CSV** to export verified submissions. Keep the original export private: it
contains applicants' email addresses. Remove the `email` column and any internal
metadata before preparing candidate materials for voters or the community.
Never commit application responses to the public website repository.

The optional `photo-url` field asks for an HTTPS link to a publicly shareable
profile photo. It does not upload or store personal photo files in Netlify.
The form explains the intended use of candidate names, answers, bios and photos,
and keeps contact email out of published candidate materials.

Notifications can be configured separately in Netlify for the intended reviewers.
This change does not configure notification recipients or change account access.

## Closing applications

Applications close October 20, 2026. Replace the form with a closed notice and
redeploy at the agreed closing time. Netlify retains detected forms, so removing
HTML alone is not a server-side submission cutoff: review submission timestamps
against the deadline. If a hard cutoff is needed, arrange it with the site admin;
do not delete the Netlify form casually, because deleting it also removes its
submissions. Export and retain responses according to TODO's retention policy.

## Maintenance and testing

- Page copy: `content/en/steering-committee-application-2027.md`.
- Form markup: `layouts/shortcodes/steering-committee-application.html`.
- Scoped styles and bio counter: `assets/css/steering-committee-application.css`
  and `assets/js/steering-committee-application.js`.
- Thank-you page: `content/en/steering-committee-thanks-2027.md`.

Run the existing production and preview builds with Hugo Extended 0.126.1.
Run `python3 scripts/check-steering-form.py public` against the generated output.
In a browser, check required fields, malformed email and non-HTTPS photo links,
and bio lengths of 300 and 301 words. Check desktop and mobile layouts.

References: [Netlify setup](https://docs.netlify.com/manage/forms/setup/),
[submissions](https://docs.netlify.com/manage/forms/submissions/),
[usage and billing](https://docs.netlify.com/manage/forms/usage-and-billing/).
