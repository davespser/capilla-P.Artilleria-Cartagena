// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

export function init(Constants) {
    Constants.AvatarNames = [
        "newwhite", "madhatter", "marchhare", "queenofhearts", "cheshirecat", "alice"
    ];

    Constants.UserBehaviorDirectory = "behaviors/default";
    Constants.UserBehaviorModules = [
        "lights.js", "bouncingBall.ts", "bitcoinTracker.ts", "openPortal.js", "urlLink.js", "cradle.js", "video.js", "spin.js", "pool.js",
    ];

    const frameColor = 0x888888;

    Constants.DefaultCards = [
        {
            card: {
                name: "entrance",
                type: "object",
                translation: [-12, 0, -10.2],
                rotation: [0, -Math.PI / 2, 0],
                spawn: "default",
            }
        },
        {
            card: {
                name:"world model",
                type: "3d",
                fileName: "/artgallery_042122.glb.zip",
                dataLocation: "./assets/3D/artgallery_042122.glb.zip",
                singleSided: true,
                shadow: true,
                layers: ["walk"],
                translation:[0, -1.7, 0],
                dataScale:[1,1,1],
                loadSynchronously: true,

                placeholder: true,
                placeholderSize: [400, 0.1, 400],
                placeholderColor: 0x808080,
                placeholderOffset: [0, 0, 0],
            }
        },
        {
            card: {
                name: "light",
                layers: ["light"],
                type: "lighting",
                behaviorModules: ["Light"],
                fileName: "/aboveClouds.jpg",
                dataLocation: "./assets/sky/abovecloudz.jpg",
                dataType: "jpg",
                toneMappingExposure: 0.2,
                loadSynchronously: true,
            }
        },
        {
            card: {
                name: "image card",
                  translation: [-7.639420878791643, 6.817473185675391, 4.3596879507405895],
    scale: [9.512173766504528, 9.512173766504528, 9.512173766504528],
    rotation: [0, -0.9986937889410472, 0, -0.05109516543250514],
                type: "2d",
                textureType: "image",
                textureLocation: "./assets/images/poster.jpg",
                cardURL: "https://noctua.gg/games/ash_echoes",
                cardHilite: 0xffffaa,
                behaviorModules: ["URLLink"],
                fullBright: true,
                frameColor: 0xcccccc,
                color: 0xbbbbbb,
                cornerRadius: 0.05,
                depth: 0.05,
                shadow: true,
            }
        },
{
            card:{
                name:"pool",
                type: "object",
                translation: [-2.5, -1.6, -5.5],
		  scale: [8.718333396228726, 8.718333396228726, 8.718333396228726],
                layers: ["pointer", "walk"],
                behaviorModules: ["Pool"],
                poolSize: [5.6, 5.6],
            }
        },

        {
            card: {
                name: "d20",
              	translation: [3.944133874517732, 0.015077880495593554, -6.577857094718],
	behaviorModules:["Spin"],
		spin: 0.1,
                layers: ["pointer"],
                scale: [0.062590422637116, 0.062590422637116, 0.062590422637116],
		fileName: "/d20.glb",
		dataLocation: "./assets/3D/d20.glb",
               dataScale:[20,20,20],
                fileName: "/d20.glb",
                modelType: "glb",
           	shadow: true,
                singleSided: true,
                type: "3d",
            }
        },
        {
            card: {
                name: "d20",
                translation: [-0.23800002127478237, 0.07293705992155575, -13.447841446579483],
behaviorModules:["Spin"],
		spin: 0.1,
                layers: ["pointer"],
                scale: [0.062590422637116, 0.062590422637116, 0.062590422637116],
		fileName: "/d20.glb",
		dataLocation: "./assets/3D/d20.glb",
               dataScale:[20,20,20],
                fileName: "/d20.glb",
                modelType: "glb",
           	shadow: true,
                singleSided: true,
                type: "3d",
            }
        },
 {
            card: {
                name: "d20",
                translation: [-9.401388466959855, 0.31291304094083516, -4.949904075132982],
behaviorModules:["Spin"],
		spin: 0.1,
                layers: ["pointer"],
                scale: [0.062590422637116, 0.062590422637116, 0.062590422637116],
		fileName: "/d20.glb",
		dataLocation: "./assets/3D/d20.glb",
               dataScale:[20,20,20],
                fileName: "/d20.glb",
                modelType: "glb",
           	shadow: true,
                singleSided: true,
                type: "3d",
            }
        },
        /*
        {
            card: {
                translation: [-12, -0.4, -10.2],
                rotation: [0, -Math.PI / 2, 0],
                layers: ["pointer"],
                className: "PortalActor",
                color: 16737996,
                cornerRadius: 0.05,
                depth: 0.05,
                frameColor: 8947848,
                height: 2.4,
                portalURL: "?world=refinery",
                type: "2d",
                width: 1.8,
            }
        },
        */
        {
            card: {
                name:"bouncinglogo",
                translation: [12, 0.70, -10.24],
                rotation: [0, -Math.PI / 2, 0],
                behaviorModules: ["BouncingBall"],
                scale: [3, 3, 3],
                width: 1,
                height: 1,
                layers: ["pointer"],
                type: "2d",
                dataLocation: "./assets/SVG/full-circle.svg",
                textureType: "canvas",
                textureWidth: 1024,
                textureHeight: 1024,
                frameColor: frameColor,
                color: 0xffffff,
                depth: 0.05,
                fullBright: true,
            }
        },
        {
            card: {
               
        translation: [5.027810500308572, 10.646200255023135, 14.032058485833632],
    scale: [12, 12, 1],
    rotation: [0, 0.9912180205953774, 0, -0.13223779961486812],
		scale: [12, 12, 1],
                depth: 1.5,
                type: "2d",
               width: 4,
                height: 2,
                fullBright: true,
                behaviorModules: ["VideoPlayer"],
                textureLocation: "./assets/video/Big_Buck_Bunny.mp4",
                textureWidth: 8096,
                textureHeight: 4048,
                textureType: "video",
                step: 0.5,
		permissions: ["action.tv"],
                
            }
        },
        {
            card: {
                name: "portal button",
                translation: [-12.1, 1.3, -10.17839395666378],
                behaviorModules: ["OpenRefineryPortalButton"],
                type: "object",
            }
        },
        /*
        {
            card: {
                name: "sticky",
                className: "TextFieldActor",
                translation: [-12, 0.8, -12.2],
                behaviorModules: ["StickyNote"],
                rotation: [0, Math.PI / 2, 0],
                depth: 0.05,
                type: "text",
                runs: [{text: `
                translation: [-12, -0.4, -10.2],
                rotation: [0, -1.5707963267948966, 0],
                layers: ["pointer", "portal"],
                className: "PortalActor",
                color: 16737996,
                cornerRadius: 0.05,
                depth: 0.05,
                frameColor: 8947848,
                height: 2.4,
                portalURL: "?world=refinery",
                type: "2d",
                width: 1.8,
                `}],
                margins: {left: 20, top: 20, right: 20, bottom: 20},
                backgroundColor: 0xf4e056,
                //color: 0xf4e056,
                frameColor: frameColor,
                width: 1,
                height: 1,
                textScale: 0.002,
                shadow: true,
            }
        },
        */
        {
            card: {
                translation: [7.032592413493899, 1.8193710684133375, 0.25],
                scale: [4, 4, 4],
                rotation: [0, -Math.PI / 2, 0],
                layers: ["pointer"],
                behaviorModules: ["PDFView"],
                color: 8947848,
                depth: 0.05,
                frameColor: 16777215,
                fullBright: true,
                modelType: "pdf",
                fileName: "/novedades.pdf",
                pdfLocation: "./assets/images/novedades.pdf",
                shadow: true,
                singleSided: true,
                type: "2d",
            }
        },
        /*
          {
            card: {
                translation: [11.914606500892997, 0.4, 0.25],
                scale: [4, 4, 4],
                rotation: [0, -Math.PI / 2, 0],
                layers: ["pointer"],
                name: "/22.05.23 Croquet AWE Presentation.jpg",
                cornerRadius: 0.02,
                fileName: "/22.05.23 Croquet AWE Presentation.jpg",
                fullBright: false,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "36xe210tezWr_E_zOXjWN7_Oz_Olw09j9csX_tqBoesMXkJCRkUMGRlQX1pTRRhDRRhVRFlHQ1NCGF9ZGUMZcVJgVE9af0V3XWdVdG5SBXFOV0BPQWN9YW9vBBlfWRhVRFlHQ1NCGFtfVURZQFNERVMZVFUPTHhQcEFMREMAV0N-WVF7RloCBU9ZVXRwB0RgDl5zAWwAUH1GDg8AVRlSV0JXGXtQDkRfW3lcBXJgZVx6b1xVfm4CemVAD0R8TF1DRnBVAAdjZ0JTegZUAWc",
                textureType: "image",
                type: "2d",
            }
        }
        {
            card: {
                name:"pendulum",
                type: "object",
                translation: [-0.03701975732147922, 3.2368919013826734, 8.444841625884546],
                behaviorModules: ["Rapier", "Pendulum"],
                layers: ["pointer"],
                scale: [0.2, 0.2, 0.2],
                color: 0xaa6666,
            }
        },
        */
        {
            card: {
                name: "cradle",
                type: "object",
                translation: [-9.67915341742099, 3.2368919013826734, 4.368801765942323],
                behaviorModules: ["Cradle"],
                layers: ["pointer"],
                shadow: true,
                scale: [0.2, 0.2, 0.2],
            }
        },
    ];
}
