// swift-tools-version:5.0
import PackageDescription

let package = Package(
    name: "QuartzStyles",
    products: [
        .library(name: "QuartzStyles", targets: ["QuartzStyles"])
    ],
    targets: [
        .target(name: "QuartzStyles", path: "iOS/QuartzStyles"),
        .testTarget(name: "Tests", dependencies: ["QuartzStyles"], path: "iOS/Tests")
    ]
)
