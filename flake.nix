{
  inputs = {
    devenv = {
      inputs.nixpkgs.follows = "nixpkgs";
      url = "github:cachix/devenv";
    };
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  };
  outputs = {
    self,
    nixpkgs,
    devenv,
    ...
  } @ inputs: let
    system = "x86_64-linux";
    pkgs = nixpkgs.legacyPackages.${system};
    in {
    devShell.${system} = devenv.lib.mkShell {
      inherit inputs pkgs;
      modules = [
        ({
          pkgs,
          config,
          ...
        }: {
          languages = {
            javascript = {
              enable = true;
            };
          };
          packages = [pkgs.toybox];
        })
      ];
    };
  };
}
