# M'goun Geopark — Mobile App Design Plan

## Brand Identity

The M'goun Geopark application draws its visual identity from the natural landscape of the High Atlas Mountains of Morocco. The palette reflects the ochre of ancient rocks, the deep blue of mountain skies, and the green of the Aït Bou Guemez valley.

| Token | Light Mode | Dark Mode | Usage |
|---|---|---|---|
| `primary` | `#C17B3F` | `#D4955A` | Accent, buttons, highlights |
| `secondary` | `#1E5C8A` | `#2E7AB8` | Map accents, links |
| `background` | `#FAFAF8` | `#121210` | Screen backgrounds |
| `surface` | `#F2EDE6` | `#1E1C18` | Cards, panels |
| `foreground` | `#1A1208` | `#F0EBE0` | Primary text |
| `muted` | `#7A6A55` | `#9A8A75` | Secondary text |
| `border` | `#E0D5C5` | `#3A3020` | Borders, dividers |
| `success` | `#3D8A4E` | `#5AAD6A` | Success states |
| `warning` | `#D4A017` | `#E8B830` | Warning states |
| `error` | `#C0392B` | `#E05A4A` | Error states |

**Typography:** System fonts (SF Pro on iOS, Roboto on Android) with Arabic RTL support.

---

## Screen List

### 1. Splash Screen
Full-screen branded splash with M'goun Geopark logo, UNESCO label, and animated fade-in. Auto-dismisses after 2 seconds.

### 2. Onboarding (3 slides)
- **Slide 1 — Bienvenue** : Introduction au Géoparc M'goun, premier géoparc UNESCO en Afrique
- **Slide 2 — Explorez** : Présentation des 22 géosites et de la carte interactive
- **Slide 3 — Découvrez** : Fonctionnalités hors ligne, itinéraires et gamification
- CTA: "Commencer l'exploration" button

### 3. Home Screen (Tab 1 — Accueil)
**Primary content:**
- Hero banner with rotating photos of iconic géosites
- Quick stats: 22 géosites, 5730 km², UNESCO depuis 2014
- "Géosite à proximité" card (GPS-based nearest geosite)
- "Itinéraires recommandés" horizontal scroll cards
- "Actualités du Géoparc" news feed section
- "Découverte du jour" featured geosite card

**Functionality:** Pull-to-refresh, GPS proximity detection, offline indicator badge.

### 4. Map Screen (Tab 2 — Carte)
**Primary content:**
- Full-screen interactive map (react-native-maps)
- All 22 géosites as custom markers (orange pins with icons)
- User location indicator (blue dot)
- Filter chips: Géosites, Itinéraires, Services
- Bottom sheet: selected geosite preview card

**Functionality:** GPS navigation, marker clustering, offline map tiles, route drawing, zoom controls.

### 5. Géosites Screen (Tab 3 — Géosites)
**Primary content:**
- Search bar with filter options
- Category filter chips: Géologiques, Culturels, Naturels, Paléontologiques
- Grid/List toggle view
- Geosite cards with: photo, name, category badge, distance, rating stars
- "Téléchargé" badge for offline-available géosites

**Functionality:** Search, filter by category, sort by distance/name/rating, offline download.

### 6. Geosite Detail Screen
**Primary content:**
- Hero image gallery (swipeable)
- Name, category badge, GPS coordinates
- Description (FR/AR/EN toggle)
- Geological information section
- Photo gallery grid
- "Comment s'y rendre" navigation card
- "Géosites similaires" horizontal scroll
- Download for offline button
- Share button

**Functionality:** Gallery swipe, language toggle, GPS navigation launch, offline download, social share.

### 7. Itinéraires Screen (Tab 4 — Itinéraires)
**Primary content:**
- Featured itinerary banner
- Itinerary cards with: cover photo, name, duration, distance, difficulty badge, number of géosites
- Filter: Durée, Difficulté, Thème
- "Mes itinéraires téléchargés" section

**Functionality:** Itinerary detail with map, step-by-step navigation, offline download.

### 8. Itinerary Detail Screen
**Primary content:**
- Map with route drawn
- Itinerary stats: distance, duration, elevation, difficulty
- List of géosites on the route
- Start navigation button
- Download offline button

### 9. Profile / Explorer Screen (Tab 5 — Explorateur)
**Primary content:**
- Explorer stats: géosites visited, itinéraires completed, badges earned
- Badge collection grid (locked/unlocked)
- "Défis en cours" section
- Leaderboard (optional)
- Settings link

**Functionality:** Badge unlock animations, progress tracking, offline stats sync.

### 10. Settings Screen
**Primary content:**
- Language selector (Français, العربية, English)
- Theme toggle (Light/Dark/Auto)
- Offline content management
- Notification preferences
- About the app (version, UNESCO info)
- Contact / Feedback

---

## Key User Flows

### Flow 1: Discover a Geosite
Home → "Géosite à proximité" card → Geosite Detail → Gallery → "Comment s'y rendre" → Map with navigation

### Flow 2: Follow an Itinerary
Home → "Itinéraires recommandés" → Itinerary Detail → Map with route → Start navigation → Geosite stops

### Flow 3: Explore the Map
Map tab → Browse markers → Tap marker → Bottom sheet preview → "Voir détails" → Geosite Detail

### Flow 4: Download for Offline
Geosite Detail → "Télécharger" button → Progress indicator → "Disponible hors ligne" confirmation

### Flow 5: Earn a Badge
Visit geosite (GPS check-in) → Badge unlock animation → Explorer profile updated → Share achievement

---

## Navigation Architecture

```
Root Stack
├── Splash Screen
├── Onboarding (first launch only)
└── Main Tabs
    ├── Tab 1: Accueil (Home)
    ├── Tab 2: Carte (Map)
    ├── Tab 3: Géosites (List)
    ├── Tab 4: Itinéraires (Routes)
    └── Tab 5: Explorateur (Profile)
        └── Settings (modal)
```

---

## Component Design Principles

**Cards:** Rounded corners (16px), subtle shadow, ochre accent border on left side for geological content.

**Buttons:** Primary = ochre fill with white text; Secondary = outlined ochre; Destructive = red.

**Map Markers:** Custom SVG pins with category icons (mountain for geological, footprint for cultural, leaf for natural).

**Badges:** Circular medals with geological symbols (ammonite, crystal, mountain peak).

**Typography Scale:**
- Hero title: 32px bold
- Screen title: 24px semibold
- Section title: 18px semibold
- Body: 16px regular
- Caption: 13px regular
- Badge label: 11px medium

---

## Offline Strategy

The app uses a layered offline approach:
1. **Core data** (geosite list, basic info) cached on first launch via AsyncStorage
2. **Map tiles** downloaded per region on demand
3. **Media** (photos, audio) downloaded per geosite on user request
4. **Offline indicator** shown in header when no network detected

---

## Accessibility

- RTL layout support for Arabic
- Minimum touch target: 44×44 points (Apple HIG)
- Color contrast ratio: minimum 4.5:1 for text
- VoiceOver / TalkBack labels on all interactive elements
- Font scaling support (Dynamic Type on iOS)
