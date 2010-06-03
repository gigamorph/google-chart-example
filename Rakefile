require 'rubygems'
require 'sprockets'

desc "Default: combine:all" 
task :default => [:"combine"]

@load_path = [ 'lib' ]

desc "Concatenate all JavaScript"
task :combine do
  sprocket([
      'src/google-chart-example.js'
    ],
    'all.js')
end

def sprocket(source_files, target)
  secretary = Sprockets::Secretary.new(
    :source_files => source_files,
    :load_path => @load_path
  )
  secretary.concatenation.save_to(target)
end
