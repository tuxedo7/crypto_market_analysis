module.exports = {
  apps: [{
    name: 'sn107_miner',
    script: 'miners/miner.py',
    interpreter: 'python',
    cwd: '/root/sn107-alpha',
    env: {
      NODE_ENV: 'production',
      PYTHONPATH: '/root/sn107-alpha'
    },
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true,
    restart_delay: 10000, // 10 seconds delay before restart
    max_restarts: 10,
    min_uptime: '10s',
    kill_timeout: 5000,
    wait_ready: true,
    listen_timeout: 30000,
    // Add exponential backoff for restarts
    exp_backoff_restart_delay: 100,
    // Environment variables for the miner
    env_file: '.env'
  }]
};

