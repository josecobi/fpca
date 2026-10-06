# What You Can and Can't Edit Yourself

The FPCA website has two kinds of content:

- **Editable in Pages CMS**: you change it yourself and the site updates after saving.
- **Built into the website**: it lives in the site's code. To change it, contact your developer.

---

## ✅ Editable in Pages CMS

### Blog Posts → shown on `/blog`, and the latest 3 on the Home page
Title, description, publish date, author, featured image + alt text, extra gallery images, tags, "Featured" checkbox, and the post body.

### Events → `/events`, each event's own page, and the next 3 on the Home page
Title, description, date, time, location, image + alt text, registration link, "Featured" checkbox, and event details.
Past events move to "Past Events" automatically by date.

### Team Members → `/about` (Board of Directors)
Name, role, board category (Executive Board / At-Large / Committee Chair), bio, photo + alt text, email, and display order.
Add a "Vacancy" entry for an open position.

### Committees → `/committees`
Committee name, main description, image + alt text + caption, display order, section heading, and the activity cards (title + description).

### Documents → `/documents`
Title, description, date, category (Meeting Minutes / Governance Documents / Newsletter), PDF link, file size, and "Featured" checkbox.

### Elected Officials → `/resources`
Name, title, district, government level (State / City / Federal), category, and display order.

### Resource Contacts (phone numbers) → `/resources`
Name, phone number, category, description, "Highlight" checkbox, and display order.

### Site Settings (one form, several pages)

| Setting | Where it appears |
|---|---|
| Membership price, price model, year, renewal period, optional note, PayPal link | `/membership` (also the price in its search-result description) and the "Annual Membership" price on `/donate` |
| Address (2 lines), city, state, ZIP | `/contact` |
| Contact email | `/contact` and the site footer |
| Meeting frequency, time, location | `/contact` and `/events` (the "General Membership Meetings" section) |
| Mission statement | `/about` |
| Google Calendar embed code | `/events` |

### Media Library
Upload photos and PDFs for use in any of the content above.

---

## 🔒 Built into the website (developer change required)

### Page text and headings
- **Home** (`/`): the hero ("Welcome to Fells Prospect" + intro paragraph), "Get Involved" banner, section titles and buttons
- **About** (`/about`): page title and subtitle, "Join Our Community" banner
- **Our Neighborhood** (`/neighborhood`): the entire page, including the history text, immigration list, "What's in a Name?" timeline, and map image
- **Committees** (`/committees`): page title and the "Want to Get Involved?" banner
- **Membership** (`/membership`): the hero text and everything except the price/year/renewal/note/PayPal link above, including the "Voting Rights", "Open to All", and "Tax Deductible" boxes, the eligibility text, the sponsorship callout, and the application form's wording and fields
- **Sponsorship** (`/sponsorship`): the entire page
- **Donate / Support Us** (`/donate`): the entire page, including the four support levels. Only the "Annual Membership" price comes from Site Settings; the other prices ($30, $100, $250+) are built in
- **Volunteer** (`/volunteer`): the entire page, including the list of volunteer opportunities, benefits, and testimonials
- **Newsletter** (`/newsletter`) and **Team** (`/team`): the entire page
- **Contact** (`/contact`): the contact form's fields and subject list, the social media links, and the "Looking for Something Specific?" links
- **Documents, Blog, Events** listing pages: titles, intro text, filter labels, and "nothing here yet" messages
- **Resources** (`/resources`): the page title, the 311 call-out box (including the 311 phone number), and the section headings

### Site-wide elements
- **Navigation menu**: menu names and which pages they link to
- **Footer**: the description, quick links, and the "Business Sponsorship" banner (the footer email comes from Site Settings)
- **Page titles and descriptions** shown in browser tabs and Google results
- **Colors, fonts, logo, and layout**
- **Images that are part of the design** (fox graphic, header graphic, neighborhood map)

### Behind the scenes
- Where form submissions go (membership application, contact form, newsletter signup)
- Adding new pages or new kinds of content
- The CMS configuration itself (`.pages.yml`)

---

## ⚠️ Things to know

- **The Donate page's other tiers don't match Membership.** The "Family Membership" ($30) tier is built in and doesn't match the per-person model on `/membership`.
- **Social media links** on `/contact` currently point to the generic Facebook, Twitter, and Instagram home pages.
- **The contact form and newsletter form** are not yet connected to a form service.

If you'd like any of the built-in items to become editable, ask your developer. Most of them can be moved into the CMS.
