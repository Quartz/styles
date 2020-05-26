import XCTest
@testable import QuartzStyles

class Tests: XCTestCase {

    func testBlue() {
        #if canImport(UIKit)
        XCTAssertEqual(QuartzStyles.colorBlue, UIColor(red: 0.086, green: 0.553, blue: 0.851, alpha: 1))
        #endif
    }

}
