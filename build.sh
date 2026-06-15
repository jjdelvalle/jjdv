# run from repo dir

bundle install
bundle exec jekyll build
cd _site
ln -s /home/imaginary/personal personal
cd ..