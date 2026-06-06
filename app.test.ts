import { describe, it, expect } from "vitest";
import { GEOPARK_INFO, GEOSITES } from "@/constants/geosites";
import { translations } from "@/constants/translations";

describe("M'goun Geopark Application Tests", () => {
  describe("Geosites Data Validation", () => {
    it("should have geosites array defined", () => {
      expect(GEOSITES).toBeDefined();
      expect(Array.isArray(GEOSITES)).toBe(true);
    });

    it("should have at least 8 geosites", () => {
      expect(GEOSITES.length).toBeGreaterThanOrEqual(8);
    });

    it("should have valid coordinates for all geosites", () => {
      GEOSITES.forEach((geosite) => {
        expect(typeof geosite.latitude).toBe("number");
        expect(typeof geosite.longitude).toBe("number");
        expect(geosite.latitude).toBeGreaterThanOrEqual(-90);
        expect(geosite.latitude).toBeLessThanOrEqual(90);
        expect(geosite.longitude).toBeGreaterThanOrEqual(-180);
        expect(geosite.longitude).toBeLessThanOrEqual(180);
      });
    });

    it("should have photos for all geosites", () => {
      GEOSITES.forEach((geosite) => {
        expect(geosite.photos).toBeDefined();
        expect(Array.isArray(geosite.photos)).toBe(true);
        expect(geosite.photos.length).toBeGreaterThan(0);
        geosite.photos.forEach((photo) => {
          expect(typeof photo).toBe("string");
          expect(photo.length).toBeGreaterThan(0);
          // Check that photos don't have placeholder URLs
          expect(photo).not.toContain("_placeholder");
        });
      });
    });

    it("should have valid difficulty levels", () => {
      const validDifficulties = ["easy", "moderate", "hard"];
      GEOSITES.forEach((geosite) => {
        expect(validDifficulties).toContain(geosite.difficulty);
      });
    });

    it("should have valid categories", () => {
      const validCategories = ["geological", "paleontological", "natural", "cultural"];
      GEOSITES.forEach((geosite) => {
        expect(validCategories).toContain(geosite.category);
      });
    });

    it("should have Bougal Taghia geosite with correct coordinates", () => {
      const bougalGeosite = GEOSITES.find(
        (g) => g.name && g.name.includes("Bougal")
      );
      expect(bougalGeosite).toBeDefined();
      if (bougalGeosite) {
        expect(bougalGeosite.latitude).toBeCloseTo(31.611404, 2);
        expect(bougalGeosite.longitude).toBeCloseTo(-6.580572, 2);
      }
    });

    it("should have Formation Marnes chocolat with correct coordinates", () => {
      const marnesGeosite = GEOSITES.find(
        (g) => g.name && g.name.includes("Marnes")
      );
      expect(marnesGeosite).toBeDefined();
      if (marnesGeosite) {
        expect(marnesGeosite.latitude).toBeCloseTo(31.922912, 2);
        expect(marnesGeosite.longitude).toBeCloseTo(-6.507225, 2);
      }
    });
  });

  describe("Maps Data Validation", () => {
    it("should have 2 downloadable maps", () => {
      expect(GEOPARK_INFO.maps.length).toBe(2);
    });

    it("should have geological and geotouristic maps", () => {
      const mapNames = GEOPARK_INFO.maps.map((m) => m.name);
      expect(mapNames).toContain("Carte Géologique");
      expect(mapNames).toContain("Carte Géotouristique");
    });

    it("should have valid map URLs", () => {
      GEOPARK_INFO.maps.forEach((map) => {
        expect(map.url).toBeDefined();
        expect(typeof map.url).toBe("string");
        expect(map.url.startsWith("https://")).toBe(true);
        expect(map.url.endsWith(".pdf")).toBe(true);
      });
    });

    it("should have valid map sizes", () => {
      GEOPARK_INFO.maps.forEach((map) => {
        expect(map.size).toBeDefined();
        expect(typeof map.size).toBe("string");
        expect(map.size).toMatch(/^\d+(\.\d+)?\s*(MB|KB)$/);
      });
    });
  });

  describe("Translations Validation", () => {
    it("should have translations for both French and Arabic", () => {
      expect(translations.fr).toBeDefined();
      expect(translations.ar).toBeDefined();
    });

    it("should have matching keys in French and Arabic translations", () => {
      const frKeys = Object.keys(translations.fr);
      const arKeys = Object.keys(translations.ar);
      expect(frKeys.sort()).toEqual(arKeys.sort());
    });

    it("should have corrected Arabic terminology", () => {
      const arabicText = JSON.stringify(translations.ar);
      // Check that corrected terminology is present
      expect(arabicText).toContain("مجال موحد يحمي");
    });

    it("should have Arabic translations for all keys", () => {
      const arabicText = JSON.stringify(translations.ar);
      // Verify Arabic translations exist and are not empty
      expect(arabicText.length).toBeGreaterThan(100);
    });
  });

  describe("Geopark Info Validation", () => {
    it("should have valid geopark center coordinates", () => {
      expect(GEOPARK_INFO.centerLatitude).toBeGreaterThanOrEqual(-90);
      expect(GEOPARK_INFO.centerLatitude).toBeLessThanOrEqual(90);
      expect(GEOPARK_INFO.centerLongitude).toBeGreaterThanOrEqual(-180);
      expect(GEOPARK_INFO.centerLongitude).toBeLessThanOrEqual(180);
    });

    it("should have geopark description", () => {
      expect(GEOPARK_INFO.description).toBeDefined();
      expect(typeof GEOPARK_INFO.description).toBe("string");
      expect(GEOPARK_INFO.description.length).toBeGreaterThan(0);
    });

    it("should have geopark area information", () => {
      expect(GEOPARK_INFO.area).toBeDefined();
      expect(typeof GEOPARK_INFO.area).toBe("number");
      expect(GEOPARK_INFO.area).toBeGreaterThan(0);
    });

    it("should have correct geopark details", () => {
      expect(GEOPARK_INFO.name).toBe("Géoparc M'Goun");
      expect(GEOPARK_INFO.area).toBe(5730);
      expect(GEOPARK_INFO.communes).toBe(15);
      expect(GEOPARK_INFO.geositesCount).toBe(22);
      expect(GEOPARK_INFO.unescoYear).toBe(2014);
    });
  });

  describe("Data Consistency", () => {
    it("should not have duplicate geosite names", () => {
      const names = GEOSITES.map((g) => g.name);
      const uniqueNames = new Set(names);
      expect(uniqueNames.size).toBe(names.length);
    });

    it("should not have duplicate map IDs", () => {
      const ids = GEOPARK_INFO.maps.map((m) => m.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);
    });

    it("should have all geosites with required fields", () => {
      expect(GEOSITES).toBeDefined();
      if (GEOSITES && Array.isArray(GEOSITES)) {
        GEOSITES.forEach((geosite) => {
          expect(geosite.id).toBeDefined();
          expect(geosite.name).toBeDefined();
          expect(geosite.description).toBeDefined();
          expect(geosite.category).toBeDefined();
          expect(geosite.difficulty).toBeDefined();
          expect(geosite.visitDuration).toBeDefined();
          expect(geosite.latitude).toBeDefined();
          expect(geosite.longitude).toBeDefined();
          expect(geosite.photos).toBeDefined();
        });
      }
    });

    it("should have all maps with required fields", () => {
      GEOPARK_INFO.maps.forEach((map) => {
        expect(map.id).toBeDefined();
        expect(map.name).toBeDefined();
        expect(map.url).toBeDefined();
        expect(map.size).toBeDefined();
      });
    });
  });
});
