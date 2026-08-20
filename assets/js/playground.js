(function () {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    document.addEventListener('click', (e) => {
      if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
      }
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target);
      if (!target) return;
      const text = target.innerText || target.textContent;
      navigator.clipboard.writeText(text).then(() => {
        btn.classList.add('copied');
        btn.innerHTML = '<i class="bi bi-check2"></i> Copiado!';
        setTimeout(() => {
          btn.classList.remove('copied');
          btn.innerHTML = '<i class="bi bi-clipboard"></i> Copiar';
        }, 2000);
      });
    });
  });

  // === FLEXBOX ===
  const flexPlayground = document.getElementById('flexPlayground');
  if (flexPlayground) {
    const flexState = {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexWrap: 'nowrap',
      alignContent: 'flex-start',
      gap: '10px'
    };
    const flexItemStates = [];
    const flexItems = flexPlayground.querySelectorAll('.flex-item');

    flexItems.forEach((item, i) => {
      flexItemStates[i] = { flexGrow: '0', flexShrink: '1', alignSelf: 'auto', order: '0' };
      item.addEventListener('click', () => {
        flexItems.forEach(el => el.classList.remove('selected'));
        item.classList.add('selected');
        document.getElementById('itemPropsLabel').textContent = 'Item ' + (i + 1);
        document.querySelectorAll('#item-props .option-pills').forEach(group => {
          const prop = group.dataset.prop;
          const val = flexItemStates[i][prop];
          group.querySelectorAll('.option-pill').forEach(p => {
            p.classList.toggle('active', p.dataset.value === val);
          });
        });
      });
    });

    document.querySelectorAll('#container-props .option-pills').forEach(group => {
      const prop = group.dataset.prop;
      group.querySelectorAll('.option-pill').forEach(pill => {
        pill.addEventListener('click', () => {
          group.querySelectorAll('.option-pill').forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          flexState[prop] = pill.dataset.value;
          updateFlexbox();
        });
      });
    });

    document.querySelectorAll('#item-props .option-pills').forEach(group => {
      const prop = group.dataset.prop;
      group.querySelectorAll('.option-pill').forEach(pill => {
        pill.addEventListener('click', () => {
          const selectedIdx = [...flexItems].findIndex(el => el.classList.contains('selected'));
          if (selectedIdx === -1) return;
          group.querySelectorAll('.option-pill').forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          flexItemStates[selectedIdx][prop] = pill.dataset.value;
          updateFlexItem(selectedIdx);
          updateFlexCode();
        });
      });
    });

    const flexGapInput = document.getElementById('flexGap');
    if (flexGapInput) {
      flexGapInput.addEventListener('input', (e) => {
        flexState.gap = e.target.value + 'px';
        updateFlexbox();
      });
    }

    function updateFlexItem(idx) {
      const item = flexItems[idx];
      const s = flexItemStates[idx];
      item.style.flexGrow = s.flexGrow;
      item.style.flexShrink = s.flexShrink;
      item.style.alignSelf = s.alignSelf;
      item.style.order = s.order;
    }

    function updateFlexbox() {
      Object.assign(flexPlayground.style, {
        flexDirection: flexState.flexDirection,
        justifyContent: flexState.justifyContent,
        alignItems: flexState.alignItems,
        flexWrap: flexState.flexWrap,
        alignContent: flexState.alignContent,
        gap: flexState.gap
      });
      updateFlexCode();
    }

    function updateFlexCode() {
      const el = document.getElementById('flexCode');
      if (!el) return;
      let code = `<span class="selector">.container</span> <span class="bracket">{</span>
  <span class="property">display</span>: <span class="value">flex</span>;
  <span class="property">flex-direction</span>: <span class="value">${flexState.flexDirection}</span>;
  <span class="property">justify-content</span>: <span class="value">${flexState.justifyContent}</span>;
  <span class="property">align-items</span>: <span class="value">${flexState.alignItems}</span>;
  <span class="property">flex-wrap</span>: <span class="value">${flexState.flexWrap}</span>;
  <span class="property">align-content</span>: <span class="value">${flexState.alignContent}</span>;
  <span class="property">gap</span>: <span class="value">${flexState.gap}</span>;
<span class="bracket">}</span>`;
      flexItems.forEach((item, i) => {
        const s = flexItemStates[i];
        if (s.flexGrow !== '0' || s.flexShrink !== '1' || s.alignSelf !== 'auto' || s.order !== '0') {
          code += `\n\n<span class="selector">.item-${i + 1}</span> <span class="bracket">{</span>`;
          if (s.flexGrow !== '0') code += `\n  <span class="property">flex-grow</span>: <span class="value">${s.flexGrow}</span>;`;
          if (s.flexShrink !== '1') code += `\n  <span class="property">flex-shrink</span>: <span class="value">${s.flexShrink}</span>;`;
          if (s.alignSelf !== 'auto') code += `\n  <span class="property">align-self</span>: <span class="value">${s.alignSelf}</span>;`;
          if (s.order !== '0') code += `\n  <span class="property">order</span>: <span class="value">${s.order}</span>;`;
          code += `\n<span class="bracket">}</span>`;
        }
      });
      el.innerHTML = code;
    }

    updateFlexbox();
  }

  // === GRID ===
  const gridPlayground = document.getElementById('gridPlayground');
  if (gridPlayground) {
    const gridState = {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: 'auto',
      justifyItems: 'stretch',
      alignItems: 'stretch',
      justifyContent: 'stretch',
      gridAutoFlow: 'row',
      gridAutoRows: 'auto',
      gap: '10px'
    };

    document.querySelectorAll('#section-grid .option-pills').forEach(group => {
      const prop = group.dataset.prop;
      group.querySelectorAll('.option-pill').forEach(pill => {
        pill.addEventListener('click', () => {
          group.querySelectorAll('.option-pill').forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          gridState[prop] = pill.dataset.value;
          updateGrid();
        });
      });
    });

    const gridGapInput = document.getElementById('gridGap');
    if (gridGapInput) {
      gridGapInput.addEventListener('input', (e) => {
        gridState.gap = e.target.value + 'px';
        updateGrid();
      });
    }

    function updateGrid() {
      Object.assign(gridPlayground.style, {
        gridTemplateColumns: gridState.gridTemplateColumns,
        gridTemplateRows: gridState.gridTemplateRows,
        justifyItems: gridState.justifyItems,
        alignItems: gridState.alignItems,
        justifyContent: gridState.justifyContent,
        gridAutoFlow: gridState.gridAutoFlow,
        gridAutoRows: gridState.gridAutoRows,
        gap: gridState.gap
      });
      updateGridCode();
    }

    function updateGridCode() {
      const el = document.getElementById('gridCode');
      if (!el) return;
      el.innerHTML =
`<span class="selector">.container</span> <span class="bracket">{</span>
  <span class="property">display</span>: <span class="value">grid</span>;
  <span class="property">grid-template-columns</span>: <span class="value">${gridState.gridTemplateColumns}</span>;
  <span class="property">grid-template-rows</span>: <span class="value">${gridState.gridTemplateRows}</span>;
  <span class="property">justify-items</span>: <span class="value">${gridState.justifyItems}</span>;
  <span class="property">align-items</span>: <span class="value">${gridState.alignItems}</span>;
  <span class="property">justify-content</span>: <span class="value">${gridState.justifyContent}</span>;
  <span class="property">grid-auto-flow</span>: <span class="value">${gridState.gridAutoFlow}</span>;
  <span class="property">grid-auto-rows</span>: <span class="value">${gridState.gridAutoRows}</span>;
  <span class="property">gap</span>: <span class="value">${gridState.gap}</span>;
<span class="bracket">}</span>`;
    }

    updateGrid();
  }
})();
