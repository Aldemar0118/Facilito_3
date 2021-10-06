# renovar cache npm
npm cache clean --force
# descarta cambios locales
git reset --hard
# traer el repo
git pull origin agregarstock
# geterar archivos de produccion
npm run build -prod
# renovar permisos
chmod +x deploy.sh