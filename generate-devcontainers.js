const fs = require('fs');

// Load the packages data
const packages = JSON.parse(fs.readFileSync('packages.json', 'utf8'));

packages.forEach(pkg => {
  // Extract the part after "container-images/"
  const shortName = pkg.name.split('container-images/')[1];
  const devContainerConfig = {
    name: `${shortName}`,
    image: `ghcr.io/nmfs-opensci/${pkg.name}:latest`,
    settings: { 
      "terminal.integrated.shell.linux": "/bin/bash"
    },
    extensions: [
    ],
    forwardPorts: [8888],
    postCreateCommand: "echo 'Environment ready!'"
  };

  // Directory for each package
  const dir = `./.devcontainer/${shortName}`;
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(`${dir}/devcontainer.json`, JSON.stringify(devContainerConfig, null, 2));
});

console.log('Generated devcontainer.json files for all packages.');
