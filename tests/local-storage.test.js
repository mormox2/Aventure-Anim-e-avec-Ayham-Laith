import { beforeEach, describe, expect, it } from "vitest";
import { getSavedDrawings, saveDrawingToGallery } from "../assets/js/drawing-gallery.js";
import { getFriends, saveFriends } from "../assets/js/friends.js";

describe("persistance localStorage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("persiste et relit les amis dans la clé dédiée", () => {
    expect(getFriends()).toEqual([]);

    saveFriends(["سارة", "خالد"]);

    expect(getFriends()).toEqual(["سارة", "خالد"]);
    expect(JSON.parse(localStorage.getItem("arsam_wa_harrik_guests"))).toEqual({
      version: 1,
      data: ["سارة", "خالد"],
    });
  });

  it("relit les tableaux legacy et rejette les formes invalides", () => {
    localStorage.setItem("arsam_wa_harrik_guests", JSON.stringify(["legacy"]));
    localStorage.setItem("arsam_wa_harrik_gallery", JSON.stringify([{ id: 1 }]));

    expect(getFriends()).toEqual(["legacy"]);
    expect(getSavedDrawings()).toEqual([{ id: 1 }]);

    localStorage.setItem("arsam_wa_harrik_guests", "not-json");
    localStorage.setItem("arsam_wa_harrik_gallery", "{}");

    expect(getFriends()).toEqual([]);
    expect(getSavedDrawings()).toEqual([]);
  });

  it("enregistre un dessin avec un identifiant et une vignette", () => {
    saveDrawingToGallery("data:image/jpeg;base64,thumb");

    const drawings = getSavedDrawings();
    expect(drawings).toHaveLength(1);
    expect(drawings[0]).toEqual(
      expect.objectContaining({
        dataUrl: "data:image/jpeg;base64,thumb",
        label: expect.any(String),
      }),
    );
    expect(drawings[0].id).toBeTruthy();
    expect(JSON.parse(localStorage.getItem("arsam_wa_harrik_gallery"))).toEqual({
      version: 1,
      data: drawings,
    });
  });
});
