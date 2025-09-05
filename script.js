// ScrollTrigger.Refresh();
function canvas_page3() {


  const canvas = document.querySelector(".canvas canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
Archive/male0001.png
Archive/male0002.png
Archive/male0003.png
Archive/male0004.png
Archive/male0005.png
Archive/male0006.png
Archive/male0007.png
Archive/male0008.png
Archive/male0009.png
Archive/male0010.png
Archive/male0011.png
Archive/male0012.png
Archive/male0013.png
Archive/male0014.png
Archive/male0015.png
Archive/male0016.png
Archive/male0017.png
Archive/male0018.png
Archive/male0019.png
Archive/male0020.png
Archive/male0021.png
Archive/male0022.png
Archive/male0023.png
Archive/male0024.png
Archive/male0025.png
Archive/male0026.png
Archive/male0027.png
Archive/male0028.png
Archive/male0029.png
Archive/male0030.png
Archive/male0031.png
Archive/male0032.png
Archive/male0033.png
Archive/male0034.png
Archive/male0035.png
Archive/male0036.png
Archive/male0037.png
Archive/male0038.png
Archive/male0039.png
Archive/male0040.png
Archive/male0041.png
Archive/male0042.png
Archive/male0043.png
Archive/male0044.png
Archive/male0045.png
Archive/male0046.png
Archive/male0047.png
Archive/male0048.png
Archive/male0049.png
Archive/male0050.png
Archive/male0051.png
Archive/male0052.png
Archive/male0053.png
Archive/male0054.png
Archive/male0055.png
Archive/male0056.png
Archive/male0057.png
Archive/male0058.png
Archive/male0059.png
Archive/male0060.png
Archive/male0061.png
Archive/male0062.png
Archive/male0063.png
Archive/male0064.png
Archive/male0065.png
Archive/male0066.png
Archive/male0067.png
Archive/male0068.png
Archive/male0069.png
Archive/male0070.png
Archive/male0071.png
Archive/male0072.png
Archive/male0073.png
Archive/male0074.png
Archive/male0075.png
Archive/male0076.png
Archive/male0077.png
Archive/male0078.png
Archive/male0079.png
Archive/male0080.png
Archive/male0081.png
Archive/male0082.png
Archive/male0083.png
Archive/male0084.png
Archive/male0085.png
Archive/male0086.png
Archive/male0087.png
Archive/male0088.png
Archive/male0089.png
Archive/male0090.png
Archive/male0091.png
Archive/male0092.png
Archive/male0093.png
Archive/male0094.png
Archive/male0095.png
Archive/male0096.png
Archive/male0097.png
Archive/male0098.png
Archive/male0099.png
Archive/male0100.png
Archive/male0101.png
Archive/male0102.png
Archive/male0103.png
Archive/male0104.png
Archive/male0105.png
Archive/male0106.png
Archive/male0107.png
Archive/male0108.png
Archive/male0109.png
Archive/male0110.png
Archive/male0111.png
Archive/male0112.png
Archive/male0113.png
Archive/male0114.png
Archive/male0115.png
Archive/male0116.png
Archive/male0117.png
Archive/male0118.png
Archive/male0119.png
Archive/male0120.png
Archive/male0121.png
Archive/male0122.png
Archive/male0123.png
Archive/male0124.png
Archive/male0125.png
Archive/male0126.png
Archive/male0127.png
Archive/male0128.png
Archive/male0138.png
Archive/male0139.png
Archive/male0140.png
Archive/male0132.png
Archive/male0133.png
Archive/male0131.png
Archive/male0130.png
Archive/male0129.png
Archive/male0136.png
Archive/male0135.png
Archive/male0134.png
Archive/male0137.png
Archive/male0141.png
Archive/male0142.png
Archive/male0143.png
Archive/male0144.png
Archive/male0145.png
Archive/male0146.png
Archive/male0147.png
Archive/male0148.png
Archive/male0149.png
Archive/male0150.png
Archive/male0151.png
Archive/male0152.png
Archive/male0153.png
Archive/male0154.png
Archive/male0155.png
Archive/male0156.png
Archive/male0157.png
Archive/male0158.png
Archive/male0159.png
Archive/male0160.png
Archive/male0161.png
Archive/male0162.png
Archive/male0163.png
Archive/male0164.png
Archive/male0165.png
Archive/male0166.png
Archive/male0167.png
Archive/male0168.png
Archive/male0169.png
Archive/male0170.png
Archive/male0171.png
Archive/male0172.png
Archive/male0173.png
Archive/male0174.png
Archive/male0175.png
Archive/male0176.png
Archive/male0177.png
Archive/male0178.png
Archive/male0179.png
Archive/male0180.png
Archive/male0181.png
Archive/male0182.png
Archive/male0183.png
Archive/male0184.png
Archive/male0185.png
Archive/male0186.png
Archive/male0187.png
Archive/male0188.png
Archive/male0189.png
Archive/male0190.png
Archive/male0191.png
Archive/male0192.png
Archive/male0193.png
Archive/male0194.png
Archive/male0195.png
Archive/male0196.png
Archive/male0197.png
Archive/male0198.png
Archive/male0199.png
Archive/male0200.png
Archive/male0201.png
Archive/male0202.png
Archive/male0203.png
Archive/male0204.png
Archive/male0205.png
Archive/male0206.png
Archive/male0207.png
Archive/male0208.png
Archive/male0209.png
Archive/male0210.png
Archive/male0211.png
Archive/male0212.png
Archive/male0213.png
Archive/male0214.png
Archive/male0215.png
Archive/male0216.png
Archive/male0217.png
Archive/male0218.png
Archive/male0219.png
Archive/male0220.png
Archive/male0221.png
Archive/male0222.png
Archive/male0223.png
Archive/male0224.png
Archive/male0225.png
Archive/male0226.png
Archive/male0227.png
Archive/male0228.png
Archive/male0229.png
Archive/male0230.png
Archive/male0231.png
Archive/male0232.png
Archive/male0233.png
Archive/male0234.png
Archive/male0235.png
Archive/male0236.png
Archive/male0237.png
Archive/male0238.png
Archive/male0239.png
Archive/male0240.png
Archive/male0241.png
Archive/male0242.png
Archive/male0243.png
Archive/male0244.png
Archive/male0245.png
Archive/male0246.png
Archive/male0247.png
Archive/male0248.png
Archive/male0249.png
Archive/male0250.png
Archive/male0251.png
Archive/male0252.png
Archive/male0253.png
Archive/male0254.png
Archive/male0255.png
Archive/male0256.png
Archive/male0257.png
Archive/male0258.png
Archive/male0259.png
Archive/male0260.png
Archive/male0261.png
Archive/male0262.png
Archive/male0263.png
Archive/male0264.png
Archive/male0265.png
Archive/male0266.png
Archive/male0267.png
Archive/male0268.png
Archive/male0269.png
Archive/male0270.png
Archive/male0271.png
Archive/male0272.png
Archive/male0273.png
Archive/male0274.png
Archive/male0275.png
Archive/male0276.png
Archive/male0277.png
Archive/male0278.png
Archive/male0279.png
Archive/male0280.png
Archive/male0281.png
Archive/male0282.png
Archive/male0283.png
Archive/male0284.png
Archive/male0285.png
Archive/male0286.png
Archive/male0287.png
Archive/male0288.png
Archive/male0289.png
Archive/male0290.png
Archive/male0291.png
Archive/male0292.png
Archive/male0293.png
Archive/male0294.png
Archive/male0295.png
Archive/male0296.png
Archive/male0297.png
Archive/male0298.png
Archive/male0299.png
Archive/male0300.png

`;
return data.split("\n")[index];
  }

  const frameCount = 400;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  // ...existing code...
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 1,
      trigger: `.canvas canvas`,
      //   set start end according to preference
      start: `top 0%`,
      end: `+=800%`,
      scroller: `body`, // <-- FIXED HERE

    },
    
    onUpdate: render,
    stagger: 5,
  });
  // ...existing code...

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({

    trigger: ".canvas canvas",
    pin: true,

    scroller: `body`,
    //   set start end according to preference
    start: ` top top`,
    end: `+=800%`,

  });

}
canvas_page3();


gsap.to(".infinite p", {
  xPercent: -100,       
  ease: "linear",
  repeat: -1,         
  duration: 40,         
  overwrite: true
});


gsap && gsap.registerPlugin && gsap.registerPlugin(ScrollTrigger);

gsap.to(".page1", {
  scrollTrigger: {
    trigger: ".page1",
    start: "top top",
    end: "bottom top",  
    pin: true
  }
});
gsap.to(".page2", {
  scrollTrigger: {
    trigger: ".page2",
    start: "top top",
    end: "bottom top",   
    pin: true
  }
});
gsap.to(".page3", {
  scrollTrigger: {
    trigger: ".page3",
    start: "top top",
    end: "bottom top",
    pin: true
  }
});



document.addEventListener('DOMContentLoaded', () => {
  const gitHubButton = document.querySelector('.nav .btn button') || document.querySelector('.nav .btn a');
  if (!gitHubButton) return;
  gitHubButton.addEventListener('click', () => {
    window.open('https://github.com/Almeao', '_blank', 'noopener');
  });
});