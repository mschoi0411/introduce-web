function showTooltip(element, message, type) {
    // Remove existing tooltip if any
    var existingTooltip = document.querySelector('.tooltip');
    if (existingTooltip) {
        existingTooltip.remove();
    }
    
    // Create tooltip element
    var tooltip = document.createElement('div');
    tooltip.className = 'tooltip ' + type;
  
    // Create styled message
    var styledMessage;
    if (type === 'data-analysis') {
        styledMessage = `
            <p class="title" style="color: #d8a5ec;">현재 상황 : </p>
            <p style="color: white;">현재 웹 해킹 위주의 공부와 실습을 하고 있으며,</p>
            <p>(SQL injection, command injection, xpath , xxe 등)와 같은 여러 공격기법에 대해 공부하였고, </p>
            <p>ctf문제나 wargame문제들을 풀어보면서 적용 및 해킹시각화를 넓히고 있음. </p>
            <p class="title" style="color: #d8a5ec;">미래 계획 : </p>
            <p>웹에 대한 전반적인 지식의 한계를 느끼고 프론트와 백엔드에 대해 학교 수업과 병행하여 공부하는 중임.</p>
            <p>웹에 대한 체계적이고 근본적인 구조를 이해하며 다양한 해킹툴도 적용하며 이것저것 해보는 중임.</p> <br>
            <p>현재 제일 유력한 진로분야 중 하나이므로 네트워크해킹, 블록체인해킹, 시스템해킹, 리버싱, 암호학과 같은 분야에 대해서도 접근하면서 전문성과 다양한 분야에 대해 접근한 후에 진로를 결정할 예정.</p>
            <p>자격증의 경우 정보보안기사/산업기사를 우선적으로 취득 후, 분야에 따라 ccsp , sscp 와 같이 세부분야에 대한 자격증 취득 예정.</p>
            <p>다양한 ctf(해킹대회)에 참여하여 꾸준한 경력 및 실력 증진.</p>
        `;  
    } else if (type === 'security') {
        styledMessage = `
            <p class="title" style="color: #d8a5ec;">현재 상황 : </p>
            <p style="color: white;"> 데이터 처리와 특징 추출을 효율적으로 하기 위해 선형대수학, 미적분, 확통에 대한 깊은 이해가 필요하므로 대학교 학부 커리큘럼을 따라감과 동시에 보충, 보완하는 형식의 공부 추진.</p>
            <p class="title" style="color: #d8a5ec;">미래 계획 : </p>
            <p>3학년부터 기계학습, 텍스트마이닝, 데이터마이닝, 딥러닝과 같은 AI 실습과 심층화된 분야를 다루는 것을 통해 현재는 자료구조, 네트워크, 선형대수학과 같이 기본이 컴퓨터와 데이터 처리의 기본이 되는 분야를 다지는 것이 중요하다 생각함.</p>
  
        `;
    } else if (type === 'math-physics') {
        styledMessage = `
            <p class="title" style="color: #d8a5ec;">현재 상황 : </p>
            <p style="color: white;">취미생활과 같은 비중으로 공부하는 분야임.</p>
            <p>대부분 방학 때 공부 혹은 청강을 통해 지식 습득.</p>
            <p>현재 자연과학대학 대학물리를 청강하지만, 천체물리 쪽으로는 수업이 잘 개설되어 있지 않아서 방학 중 취미로 조금씩 독학 할 예정, 혹은 연합 동아리를 통해 다양한 관점과 견해 습득 예정.</p>
            <p>현재는 양자역학과 관련하여 양자컴퓨터와 접목하여 양자해킹에 대해 공부 중임.</p>
            <p class="title" style="color: #d8a5ec;">미래 계획 : </p>
            <p>미래 계획은 정해두지 않았지만, 공부 중 관심분야에 대해 공부하는 방식으로 공부할 예정.</p>
            <p>Ex) 다차원에 대한 우주, 우주망원경, 우주통신에 대한 통신학과 같은 분야,</p>
        `;
    }
    tooltip.innerHTML = styledMessage;
    
    // Append tooltip to the document
    document.body.appendChild(tooltip);
    
    // Calculate position
    var rect = element.getBoundingClientRect();
    var tooltipRect = tooltip.getBoundingClientRect();
    tooltip.style.left = rect.left + window.scrollX + (rect.width - tooltipRect.width) / 2 - 20 + 'px';
    tooltip.style.top = rect.bottom + window.scrollY + 10 + 'px';
    
    // Show tooltip
    tooltip.style.display = 'block';
    
    // Hide tooltip after 3 seconds
    setTimeout(function() {
        tooltip.remove();
    }, 3000);
  }
  
  // Hide tooltip when clicking outside
  document.addEventListener('click', function(event) {
    var tooltip = document.querySelector('.tooltip');
    if (tooltip && !event.target.closest('.do-inner')) {
        tooltip.remove();
    }
  });