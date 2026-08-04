export function renderPlayground() {
  const playgroundEl = document.getElementById('playground');
  if (!playgroundEl) return;

  playgroundEl.innerHTML = `
    <div class="container">
      <div style="display:inline-flex; align-items:center; gap:0.5rem; margin-bottom:0.5rem;" class="badge badge-cyan">
        <span class="pulse-dot"></span> Live Full-Stack Demo
      </div>
      <h2 class="section-title">Interactive System Playground</h2>
      <p class="section-subtitle">Simulasikan request HTTP API backend real-time dan amati alur respon JSON server.</p>

      <div class="card fade-in" style="padding:0; overflow:hidden;">
        <!-- Control Bar -->
        <div style="background:var(--bg-main); padding:1rem 1.5rem; border-bottom:1px solid var(--border-color); display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:1rem;">
          <div style="display:flex; align-items:center; gap:0.75rem;">
            <span class="mono" style="background:var(--accent-cyan-glow); color:var(--accent-cyan); padding:0.25rem 0.5rem; border-radius:4px; font-weight:600; font-size:0.85rem;" id="playground-method">GET</span>
            <select id="playground-endpoint-select" class="mono" style="background:var(--bg-surface); color:var(--text-primary); border:1px solid var(--border-accent); padding:0.4rem 0.75rem; border-radius:var(--radius-sm); font-size:0.9rem; cursor:pointer;">
              <option value="health">/api/v1/health (System Status)</option>
              <option value="projects">/api/v1/projects/stats (Metrics)</option>
              <option value="architecture">/api/v1/architecture/nodes (Topology)</option>
            </select>
          </div>
          <button id="send-request-btn" class="btn btn-primary" style="padding:0.4rem 1.25rem; font-size:0.875rem;">
            Execute Request
          </button>
        </div>

        <!-- Terminal Output Area -->
        <div style="padding:1.5rem; font-family:var(--font-mono); font-size:0.875rem;">
          <div style="display:flex; justify-content:space-between; color:var(--text-muted); margin-bottom:0.75rem; font-size:0.8rem;">
            <span>Response Header: HTTP/1.1 200 OK</span>
            <span id="response-time">Latency: -- ms</span>
          </div>
          <pre id="playground-output" style="background:var(--bg-main); padding:1.25rem; border-radius:var(--radius-sm); border:1px solid var(--border-color); color:var(--accent-cyan); overflow-x:auto; min-height:160px; margin:0;">
// Click "Execute Request" to test API response...
          </pre>
        </div>
      </div>
    </div>
  `;

  const endpoints = {
    health: {
      method: "GET",
      response: {
        status: "healthy",
        uptime_seconds: 864200,
        timestamp: new Date().toISOString(),
        services: { database: "connected (1ms)", redis_cache: "active", api_gateway: "online" }
      }
    },
    projects: {
      method: "GET",
      response: {
        total_projects: 12,
        categories: ["Full-Stack", "Backend & APIs", "System Architecture"],
        core_technologies: ["Node.js", "C# .NET", "PostgreSQL", "Laravel", "Docker"],
        code_quality_score: "A+"
      }
    },
    architecture: {
      method: "GET",
      response: {
        topology: "Decoupled Microservices / Modular Monolith",
        load_balancer: "Nginx Reverse Proxy",
        database_cluster: "PostgreSQL Master-Replica",
        caching_layer: "Redis Pub/Sub"
      }
    }
  };

  const selectEl = document.getElementById('playground-endpoint-select');
  const methodEl = document.getElementById('playground-method');
  const btnEl = document.getElementById('send-request-btn');
  const outputEl = document.getElementById('playground-output');
  const timeEl = document.getElementById('response-time');

  selectEl?.addEventListener('change', (e) => {
    const ep = endpoints[e.target.value];
    if (ep && methodEl) methodEl.textContent = ep.method;
  });

  btnEl?.addEventListener('click', () => {
    const selectedKey = selectEl?.value || 'health';
    const epData = endpoints[selectedKey];
    
    if (outputEl) outputEl.textContent = "// Executing simulated request...";
    const start = performance.now();

    setTimeout(() => {
      const end = performance.now();
      const latency = Math.round(end - start);
      if (timeEl) timeEl.textContent = `Latency: ${latency} ms`;
      if (outputEl && epData) {
        const responseData = selectedKey === 'health' 
          ? { ...epData.response, timestamp: new Date().toISOString() } 
          : epData.response;
        outputEl.textContent = JSON.stringify(responseData, null, 2);
      }
    }, 150);
  });
}
