function toggleDetail(num) {
  const detail = document.getElementById('detail-' + num);
  if (detail) {
    detail.style.display = detail.style.display === 'block' ? 'none' : 'block';
  }
}

function toggleSummary(element) {
  const next = element.nextElementSibling;
  if (next && next.classList.contains('summary')) {
    next.style.display = next.style.display === 'block' ? 'none' : 'block';
  }
}
