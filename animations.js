(function () {
  'use strict';

  function reducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function hasAnime() {
    return typeof window.anime === 'function';
  }

  function initTilt() {
    if (reducedMotion()) return;
    var nodes = document.querySelectorAll('[data-tilt]');
    var max = 8;

    nodes.forEach(function (el) {
      var raf = 0;
      var rect;

      function onMove(e) {
        if (!rect) return;
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var mx = rect.width / 2;
        var my = rect.height / 2;
        var rx = ((y - my) / my) * -max;
        var ry = ((x - mx) / mx) * max;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(function () {
          el.style.transform =
            'perspective(1100px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) translateZ(0)';
        });
      }

      function refreshRect() {
        rect = el.getBoundingClientRect();
      }

      function onEnter() {
        refreshRect();
      }

      function onLeave() {
        cancelAnimationFrame(raf);
        el.style.transform = '';
      }

      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
    });
  }

  function initOrbParallax() {
    if (reducedMotion()) return;
    var wrap = document.querySelector('.bg-orbs');
    if (!wrap) return;
    var tick = null;
    window.addEventListener(
      'mousemove',
      function (e) {
        if (tick) return;
        tick = requestAnimationFrame(function () {
          tick = null;
          var px = e.clientX / window.innerWidth - 0.5;
          var py = e.clientY / window.innerHeight - 0.5;
          wrap.style.transform =
            'translate3d(' + px * 28 + 'px,' + py * 22 + 'px, 0) scale(1.02)';
        });
      },
      { passive: true }
    );
  }

  function runHeroIntro() {
    if (!hasAnime() || reducedMotion()) return;
    window.anime({
      targets: '.hero-bento .bento',
      translateY: [36, 0],
      translateZ: [-40, 0],
      rotateX: [12, 0],
      opacity: [0, 1],
      delay: window.anime.stagger(100, { start: 240 }),
      duration: 920,
      easing: 'easeOutExpo'
    });
  }

  function onLoaded() {
    runHeroIntro();
  }

  document.addEventListener('DOMContentLoaded', function () {
    initTilt();
    initOrbParallax();
  });

  window.addEventListener('portfolioV2:loaded', onLoaded);
})();
