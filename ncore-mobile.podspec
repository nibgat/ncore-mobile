require "json"

package = JSON.parse(File.read(File.join(dir, "package.json")))

Pod::Spec.new do |s|
  s.name         = package["name"]
  s.version      = package["version"]
  s.summary      = package["description"]
  s.homepage     = package["homepage"]
  s.license      = package["license"]
  s.authors      = package["author"]

  s.platforms    = { :ios => "10.0" }
  s.source       = { :git => "#{package["repository"]}.git", :tag => "v#{s.version}" }

  s.ios.resource_bundle = { 'NCoreMobileFonts' => 'src/assets/fonts/*' }
  s.info_plist = {
    'UIAppFonts' => [
      'Montserrat-Italic.ttf',
      'Montserrat-Light.ttf',
      'Montserrat-LightItalic.ttf',
      'Montserrat-Medium.ttf',
      'Montserrat-MediumItalic.ttf',
      'Montserrat-Regular.ttf',
      'Montserrat-SemiBold.ttf',
      'Montserrat-SemiBoldItalic.ttf',
    ]
  }
end