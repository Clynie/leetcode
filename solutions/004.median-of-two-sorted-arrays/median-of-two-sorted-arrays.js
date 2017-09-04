/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
	var m = nums1.length
	var n = nums2.length

	if ((m + n) % 2 == 0) {
		return (getMedian(nums1, m, nums2, n, (m + n) / 2) + getMedian(nums1, m, nums2, n, (m + n) / 2 + 1)) / 2.0
	} else {
		return getMedian(nums1, m, nums2, n, (m + n + 1) / 2)
	}

	function getMedian(a, m, b, n, k) {
		debugger
		if (m > n) {
			return getMedian(b, n, a, m, k)
		}
		if (m == 0) {
			return b[k - 1]
		}
		if (k === 1) {
			return Math.min(a[0], b[0])
		}

		var pa = Math.min(Math.floor(k / 2), m)
		var pb = k - pa

		if (a[pa - 1] < b[pb - 1]) {
			return getMedian(a.slice(pa), m - pa, b, n, k - pa)
		} else if (a[pa - 1] > b[pb - 1]) {
			return getMedian(a, m, b.slice(pb), n - pb, k - pb)
		} else {
			return a[pa - 1]
		}
	}
};