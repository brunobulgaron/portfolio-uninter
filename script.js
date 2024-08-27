const btnVoltarTopo = document.getElementById('voltar-topo');

btnVoltarTopo.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
});
