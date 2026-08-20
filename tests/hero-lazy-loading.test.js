import { beforeEach, describe, expect, it } from "vitest";
import { loadHeroesData, renderHeroesGallery } from "../assets/js/hero-gallery.js";

describe("galerie héros lazy", () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="heroes-gallery"></div>';
  });

  it("charge les données héros à la demande", async () => {
    const heroes = await loadHeroesData();

    expect(Array.isArray(heroes)).toBe(true);
    expect(heroes.length).toBeGreaterThan(0);
    expect(heroes[0]).toEqual(expect.objectContaining({ id: expect.any(String), svg: expect.any(String) }));
  });

  it("rend uniquement les héros de la catégorie demandée", async () => {
    await renderHeroesGallery("dino");

    const dinoCards = [...document.querySelectorAll("#heroes-gallery button")];
    expect(dinoCards.length).toBeGreaterThan(0);
    expect(dinoCards.every((card) => card.dataset.heroCategory === "dino")).toBe(true);

    await renderHeroesGallery("fantasy");
    const fantasyCards = [...document.querySelectorAll("#heroes-gallery button")];
    expect(fantasyCards.length).toBeGreaterThan(0);
    expect(fantasyCards.every((card) => card.dataset.heroCategory === "fantasy")).toBe(true);

    await renderHeroesGallery("hero");
    const heroCards = [...document.querySelectorAll("#heroes-gallery button")];
    expect(heroCards.length).toBeGreaterThan(0);
    expect(heroCards.every((card) => card.dataset.heroCategory === "hero")).toBe(true);
  });
});
