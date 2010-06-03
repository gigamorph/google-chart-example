require 'fileutils'

require 'rubygems'
require 'sprockets'

desc "Default: combine:all" 
task :default => [:"build"]

@load_path = [ 'lib' ]

desc "Remove the build folder"
task :clean do
  FileUtils.rm_rf('build')
end

desc "Create the build folder"
task :init => :clean do
  Dir.mkdir('build') unless File.exist?('build')
end

desc "Prepare files to be deployed"
task :build => :init do
  sprocket([
      'src/google-chart-example.js'
    ],
    'build/all.js')
  move_index_html
end

def sprocket(source_files, target)
  secretary = Sprockets::Secretary.new(
    :source_files => source_files,
    :load_path => @load_path
  )
  secretary.concatenation.save_to(target)
end

def move_index_html
  new_js = '<script type="text/javascript" src="all.js"></script>'
  begin_js = '<!--\s*begin\s*javascript.*?-->'
  end_js = '<!--\s*end\s*javascript.*?-->'
  open('src/index.html') do |ifile|
    open('build/index.html', 'w') do |ofile|
      ofile.write(ifile.read.sub(/#{begin_js}.*#{end_js}/mi, new_js))
    end
  end
end
